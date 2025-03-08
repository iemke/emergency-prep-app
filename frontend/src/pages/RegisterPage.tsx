import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, EyeIcon, EyeOffIcon, CheckCircle } from 'lucide-react';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    console.log('Registration data:', formData);
  };
  
  // Simple password strength checker
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, text: '' };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    let text = '';
    let color = '';
    
    if (strength < 2) {
      text = 'Weak';
      color = 'bg-destructive';
    } else if (strength < 4) {
      text = 'Medium';
      color = 'bg-amber-500';
    } else {
      text = 'Strong';
      color = 'bg-green-500';
    }
    
    return { strength, text, color };
  };
  
  const passwordStrength = getPasswordStrength(formData.password);
  const passwordsMatch = formData.password && formData.password === formData.confirmPassword;
  
  return (
    <div className="min-h-screen bg-accent/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card rounded-lg p-8 shadow-sm border border-border">
        <div className="text-center">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-4 text-3xl font-bold">Create your account</h2>
          <p className="mt-2 text-muted-foreground">
            Join PrepReady and start your emergency preparedness journey
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  )}
                </button>
              </div>
              
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs">Password strength:</div>
                    <div className="text-xs font-medium">{passwordStrength.text}</div>
                  </div>
                  <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${passwordStrength.color}`} 
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    ></div>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center">
                      <span className={`inline-block w-3 h-3 mr-2 ${formData.password.length >= 8 ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      At least 8 characters
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-3 h-3 mr-2 ${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-3 h-3 mr-2 ${/[0-9]/.test(formData.password) ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      At least one number
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  )}
                </button>
              </div>
              {formData.confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-xs text-destructive">
                  Passwords do not match
                </p>
              )}
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  checked={agreedToTerms}
                  onChange={() => setAgreedToTerms(!agreedToTerms)}
                  className="h-4 w-4 text-primary focus:ring-primary border-input rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-muted-foreground">
                  I agree to the <Link to="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={!passwordsMatch || !agreedToTerms}
            >
              Create account
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <div className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}