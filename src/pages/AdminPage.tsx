import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import type { PortfolioItem } from "../data/portfolio";

const ALLOWED_EMAILS = [
  'alinourawan123@gmail.com',
  'aniqjaved@seedingo.com',
  'aniqjaved@gmail.com',
];

export function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [portfolioItems, setPortfolioItems] = useState<(PortfolioItem & { id: string })[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"portfolio" | "leads">("portfolio");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    category: "Strategy",
    image: "",
    fullImage: "",
    industry: "",
    challenge: "",
    solution: "",
    order: 0,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email && ALLOWED_EMAILS.includes(currentUser.email)) {
        fetchPortfolio();
        fetchLeads();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as PortfolioItem & { id: string }));
      setPortfolioItems(items);
      if (items.length > 0) {
        setFormData(prev => ({ ...prev, order: items.length }));
      }
      setPermissionError(false);
    } catch (error: any) {
      if (error?.code === 'permission-denied') {
        setPermissionError(true);
      }
      console.error("Error fetching portfolio:", error);
    }
  };

  const fetchLeads = async () => {
    try {
      const inquirySnap = await getDocs(collection(db, 'inquiries'));
      const auditSnap = await getDocs(collection(db, 'audits'));
      
      const inquiries = inquirySnap.docs.map(d => ({ id: d.id, type: 'Contact Form', ...d.data() }));
      const audits = auditSnap.docs.map(d => ({ id: d.id, type: 'Brand Audit', ...d.data() }));
      
      const combined = [...inquiries, ...audits].sort((a: any, b: any) => {
        const timeA = a.createdAt?.toMillis() || 0;
        const timeB = b.createdAt?.toMillis() || 0;
        return timeB - timeA;
      });
      setLeads(combined);
    } catch (e) {
      console.error("Error fetching leads:", e);
    }
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. See console.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formData.image) {
      alert("Thumbnail image URL is required!");
      return;
    }
    
    setIsSubmitting(true);
    setUploadStatus("Saving to database...");

    try {
      await addDoc(collection(db, 'portfolio'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      alert("Successfully added portfolio item!");
      setFormData({
        title: "",
        category: "Strategy",
        image: "",
        fullImage: "",
        industry: "",
        challenge: "",
        solution: "",
        order: formData.order + 1,
      });
      
      // Reset file inputs visually
      const form = e.target as HTMLFormElement;
      form.reset();
      
      fetchPortfolio();
    } catch (error) {
      console.error("Error adding doc:", error);
      alert("Failed to add piece. Are you sure you are logged in with an admin account?");
    } finally {
      setIsSubmitting(false);
      setUploadStatus("");
    }
  };

  const handleDelete = async (id: string, collectionName: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteDoc(doc(db, collectionName, id));
      if (collectionName === 'portfolio') fetchPortfolio();
      else fetchLeads();
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Delete failed.");
    }
  };

  if (loading) return <div className="pt-32 px-10 text-white font-mono">Loading...</div>;

  if (!user || !user.email || !ALLOWED_EMAILS.includes(user.email)) {
    return (
      <div className="pt-32 pb-32 px-5 md:px-10 max-w-xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-6">Admin Access</h1>
        <p className="text-white/90 mb-8">Secure area. You must login with authorized account.</p>
        <button 
          onClick={handleLogin}
          className="bg-white text-black font-bold tracking-widest uppercase px-8 py-4 hover:bg-white/90 transition-colors"
        >
          Sign In with Google
        </button>
        {user && user.email && !ALLOWED_EMAILS.includes(user.email) && (
          <p className="text-red-400 mt-4 font-mono text-sm">Access denied for {user.email}.</p>
        )}
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-5 md:px-10 max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/60 pb-8 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-bauble-blue font-mono mt-2">{user.email}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-white/10 p-1 border border-white/20">
            <button 
              onClick={() => setActiveTab("portfolio")} 
              className={`px-6 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${activeTab === 'portfolio' ? 'bg-white text-black font-bold' : 'text-white/70 hover:text-white'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setActiveTab("leads")} 
              className={`px-6 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${activeTab === 'leads' ? 'bg-white text-black font-bold' : 'text-white/70 hover:text-white'}`}
            >
              Leads Data
            </button>
          </div>
          <button onClick={handleLogout} className="border border-white/40 text-white px-4 py-2 font-mono text-xs hover:bg-black/40 transition-colors h-full">Logout</button>
        </div>
      </div>

      {permissionError && (
        <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg mb-8">
          <h3 className="text-red-400 font-bold mb-2">Firestore Permissions Need Update</h3>
          <p className="text-white/80 text-sm mb-4">
            To test the admin functionality, you MUST update the rules in the Firebase Console.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-bauble-blue font-bold text-sm mb-2">1. Firestore Database Rules:</h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-white font-mono">
                <li>Go to Firebase Console &rarr; Firestore Database &rarr; Rules tab.</li>
                <li>Copy the contents of `firestore.rules` from your project and publish them.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && (
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ADD NEW FORM */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Add Portfolio Piece</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] text-white/80 uppercase tracking-widest mb-2 font-mono">Title</label>
                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-black border border-white/40 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-white/80 uppercase tracking-widest mb-2 font-mono">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-black/10 border border-white/10 shadow-inner px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors appearance-none">
                    <option>Strategy</option>
                    <option>Identity</option>
                    <option>Growth</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-white/80 uppercase tracking-widest mb-2 font-mono">Industry</label>
                  <input required value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} placeholder="e.g. F&B, Tech" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors" />
                </div>
              </div>
              
              <div className="p-4 border border-white/10 bg-white/5 space-y-4">
                <div>
                  <label className="block text-[10px] text-bauble-blue uppercase tracking-widest mb-2 font-mono font-bold">1. Thumbnail Image URL (Grid)</label>
                  <p className="text-[10px] text-white/50 mb-2 font-mono">Upload to <a href="https://imgur.com/upload" target="_blank" rel="noreferrer" className="text-white underline hover:text-bauble-blue">Imgur</a> or another host and paste the direct image link here.</p>
                  <input type="url" required value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="https://i.imgur.com/..." className="w-full bg-black border border-white/40 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors" />
                  <p className="text-[10px] text-white/50 mt-2 font-mono">Recommended aspect ratio: 4:5 (e.g. 800x1000px). Used for the main grid view.</p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <label className="block text-[10px] text-white/80 uppercase tracking-widest mb-2 font-mono font-bold">2. Full Scrollable Image URL (Popup) - Optional</label>
                  <p className="text-[10px] text-white/50 mb-2 font-mono">Paste the direct image link for the full project view.</p>
                  <input type="url" value={formData.fullImage} onChange={e => setFormData({...formData, fullImage: e.target.value})} placeholder="https://i.imgur.com/..." className="w-full bg-black border border-white/40 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors" />
                  <p className="text-[10px] text-white/50 mt-2 font-mono">Recommended width: <strong className="text-white">960px</strong>. Height can be however long you want the scroll to be. Used inside the modal popup.</p>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest mb-2 font-mono">The Challenge (Optional)</label>
                <textarea value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors min-h-[100px]" />
              </div>
              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest mb-2 font-mono">The Solution (Optional)</label>
                <textarea value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors min-h-[100px]" />
              </div>
              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest mb-2 font-mono">Order Index</label>
                <input type="number" required value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value)})} placeholder="e.g. 0" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-bauble-blue transition-colors" />
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-bauble-blue text-white font-bold tracking-widest uppercase disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? uploadStatus || "Processing..." : "Upload & Save to Portfolio"}
              </button>
            </form>
          </div>

          {/* EXISTING LIST */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Manage Existing</h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              {portfolioItems.map(item => (
                <div key={item.id} className="flex gap-4 border border-white/10 p-4 bg-black items-center group">
                  <img src={item.image} alt="" className="w-16 h-20 object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold truncate">{item.title}</h4>
                    <p className="text-xs text-white/50 font-mono">{item.category} • {item.industry} • Order: {item.order}</p>
                    {item.fullImage && <span className="text-[9px] bg-bauble-blue/20 text-bauble-blue px-2 py-0.5 inline-block mt-1">Has Full Image</span>}
                  </div>
                  <button onClick={() => handleDelete(item.id, 'portfolio')} className="text-red-400 font-mono text-xs hover:text-red-300 opacity-50 group-hover:opacity-100 transition-opacity">Delete</button>
                </div>
              ))}
              {portfolioItems.length === 0 && <p className="text-white/70 font-mono">No items found.</p>}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'leads' && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-bold text-white">Inquiries & Leads</h2>
            <p className="text-white/50 font-mono text-sm">Showing newest first</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="bg-black/50 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Source</th>
                    <th className="px-6 py-4">Name / Email</th>
                    <th className="px-6 py-4">Details</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {leads.map((lead) => {
                    const dateObj = lead.createdAt?.toDate ? lead.createdAt.toDate() : new Date();
                    const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    return (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">{dateStr}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-[10px] tracking-widest font-bold uppercase rounded-sm ${lead.type === 'Brand Audit' ? 'bg-orange-500/20 text-orange-400' : 'bg-bauble-blue/20 text-bauble-blue'}`}>
                            {lead.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-xs">
                          <div className="font-bold text-white text-sm font-sans mb-1">{lead.name || lead.fullName || 'N/A'}</div>
                          <a href={`mailto:${lead.email}`} className="text-bauble-blue hover:underline">{lead.email}</a>
                          {lead.phone && <div className="mt-1 text-white/50">{lead.phone}</div>}
                        </td>
                        <td className="px-6 py-4 max-w-[400px]">
                          {lead.type === 'Brand Audit' ? (
                            <div className="space-y-1 text-xs">
                              <div className="text-white/40"><strong className="text-white/70">Business:</strong> {lead.businessName}</div>
                              <div className="text-white/40"><strong className="text-white/70">URL:</strong> {lead.website}</div>
                              <div className="text-white flex gap-2"><strong className="text-white/70">Challenge:</strong> <span className="truncate">{lead.challenge}</span></div>
                            </div>
                          ) : (
                            <div className="space-y-1 text-xs">
                              <div className="text-white/40"><strong className="text-white/70">Service:</strong> {lead.service}</div>
                              {lead.website && <div className="text-white/40"><strong className="text-white/70">URL:</strong> {lead.website}</div>}
                              <div className="text-white flex gap-2"><strong className="text-white/70">Message:</strong> <span className="truncate">{lead.message}</span></div>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                           <button onClick={() => handleDelete(lead.id, lead.type === 'Brand Audit' ? 'audits' : 'inquiries')} className="text-red-400 font-mono text-[10px] uppercase hover:underline">
                             Delete
                           </button>
                        </td>
                      </tr>
                    );
                  })}
                  
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-white/50 font-mono">No leads found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
