
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("student");
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      // For demo purposes: different roles redirect to different dashboards
      if (userType === 'admin' && credentials.username === 'admin' && credentials.password === 'admin') {
        toast({
          title: "Login Successful",
          description: "Welcome, Administrator",
        });
        navigate('/admin/dashboard');
      } else if (userType === 'teacher' && credentials.username === 'teacher' && credentials.password === 'teacher') {
        toast({
          title: "Login Successful",
          description: "Welcome, Teacher",
        });
        navigate('/teacher/dashboard');
      } else if (userType === 'student' && credentials.username === 'student' && credentials.password === 'student') {
        toast({
          title: "Login Successful",
          description: "Welcome, Student",
        });
        navigate('/student/dashboard');
      } else if (userType === 'parent' && credentials.username === 'parent' && credentials.password === 'parent') {
        toast({
          title: "Login Successful",
          description: "Welcome, Parent",
        });
        navigate('/parent/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials for " + userType + " role",
          variant: "destructive"
        });
      }
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="max-w-md mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Log in to access the school management system</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" onValueChange={setUserType}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="parent">Parent</TabsTrigger>
              <TabsTrigger value="teacher">Teacher</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    name="username"
                    placeholder={`Enter your ${userType} username`} 
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a 
                      href="#" 
                      className="text-sm text-school-primary hover:text-school-secondary"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Enter your password" 
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-school-primary hover:bg-blue-800"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </Button>

                <div className="mt-4 p-3 bg-slate-50 rounded text-sm">
                  <p className="font-medium mb-1">Demo Credentials:</p>
                  <p>Use <span className="font-medium">{userType}</span> as both username and password</p>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>For technical support, please contact the system administrator.</p>
              </div>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
