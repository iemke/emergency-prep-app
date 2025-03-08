import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, MapPin, Home, Phone, Mail, ShieldCheck, Users } from 'lucide-react';

export function ProfilePage() {
  // Mock user data (in a real app this would come from an API)
  const [user, setUser] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    address: '123 Main Street, Anytown, CA 94321',
    emergencyContacts: [
      { id: 1, name: 'Sarah Johnson', relationship: 'Spouse', phone: '(555) 987-6543' },
      { id: 2, name: 'Michael Johnson', relationship: 'Brother', phone: '(555) 456-7890' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would save the data to the backend here
    setIsEditing(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      <div className="space-y-8">
        {/* Personal Information */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
          
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={user.firstName} 
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={user.lastName} 
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={user.email} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={user.phone} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={user.address} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
              </div>
              
              <div>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Name</div>
                  <div>{user.firstName} {user.lastName}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div>{user.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div>{user.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div>{user.address}</div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Emergency Contacts */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Emergency Contacts</h2>
          </div>
          
          <div className="space-y-4">
            {user.emergencyContacts.map(contact => (
              <div key={contact.id} className="p-4 border border-border rounded-lg">
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-muted-foreground">{contact.relationship}</div>
                <div className="text-sm">{contact.phone}</div>
              </div>
            ))}
            
            <Button variant="outline" className="mt-2">
              Add Emergency Contact
            </Button>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Emergency Preparedness</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start h-auto py-3">
              <ShieldCheck className="h-5 w-5 mr-2" />
              <div className="text-left">
                <div>Emergency Kit</div>
                <div className="text-xs text-muted-foreground">Manage your emergency supplies</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto py-3">
              <MapPin className="h-5 w-5 mr-2" />
              <div className="text-left">
                <div>Evacuation Plan</div>
                <div className="text-xs text-muted-foreground">Set up your evacuation routes</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}