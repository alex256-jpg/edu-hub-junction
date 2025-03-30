
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NoticeBoard from "./pages/NoticeBoard";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Settings from "./pages/admin/Settings";
import Marks from "./pages/admin/Marks";
import ReportCards from "./pages/admin/ReportCards";
import SmsNotifications from "./pages/admin/SmsNotifications";
import Attendance from "./pages/admin/Attendance";

// Student pages
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/Dashboard";

// Teacher pages
import TeacherLayout from "./layouts/TeacherLayout";
import TeacherDashboard from "./pages/teacher/Dashboard";

// Parent pages
import ParentLayout from "./layouts/ParentLayout";
import ParentDashboard from "./pages/parent/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="settings" element={<Settings />} />
            <Route path="marks" element={<Marks />} />
            <Route path="report-cards" element={<ReportCards />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="sms-notifications" element={<SmsNotifications />} />
            <Route index element={<Dashboard />} />
          </Route>
          
          {/* Student routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            {/* Add more student routes here */}
            <Route index element={<StudentDashboard />} />
          </Route>
          
          {/* Teacher routes */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
            {/* Add more teacher routes here */}
            <Route index element={<TeacherDashboard />} />
          </Route>
          
          {/* Parent routes */}
          <Route path="/parent" element={<ParentLayout />}>
            <Route path="dashboard" element={<ParentDashboard />} />
            {/* Add more parent routes here */}
            <Route index element={<ParentDashboard />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
