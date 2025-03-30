
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  Calendar,
  Clock,
  MessageSquare, 
  Award,
  Bell, 
  Settings, 
  LogOut 
} from 'lucide-react';

const TeacherLayout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate('/login');
  };

  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/teacher/dashboard'
    },
    {
      title: 'My Classes',
      icon: Users,
      path: '/teacher/classes'
    },
    {
      title: 'Subjects',
      icon: BookOpen,
      path: '/teacher/subjects'
    },
    {
      title: 'Assignments',
      icon: FileText,
      path: '/teacher/assignments'
    },
    {
      title: 'Exam Management',
      icon: Calendar,
      path: '/teacher/exams'
    },
    {
      title: 'Attendance',
      icon: Clock,
      path: '/teacher/attendance'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      path: '/teacher/messages'
    },
    {
      title: 'Grading',
      icon: Award,
      path: '/teacher/grading'
    },
    {
      title: 'Announcements',
      icon: Bell,
      path: '/teacher/announcements'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/teacher/settings'
    }
  ];

  return (
    <SidebarProvider defaultOpen={!collapsed} onOpenChange={setCollapsed}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader className="border-b border-border">
            <div className="flex items-center px-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-school-primary">EduHub</span>
                <span className="text-2xl font-bold text-school-secondary">Junction</span>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Teacher Portal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link to={item.path}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-border p-4">
            <Button 
              variant="outline"
              className="w-full flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </Button>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="flex flex-col w-full">
            <header className="bg-white border-b border-gray-200 shadow-sm">
              <div className="h-16 px-4 flex items-center justify-between">
                <div className="flex items-center">
                  <SidebarTrigger />
                  <h1 className="text-xl font-semibold ml-4">Teacher Portal</h1>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon">
                    <Bell size={18} />
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-medium">
                      T
                    </div>
                    <span className="font-medium">Sarah Williams</span>
                  </div>
                </div>
              </div>
            </header>
            
            <main className="flex-1 p-6 overflow-auto">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default TeacherLayout;
