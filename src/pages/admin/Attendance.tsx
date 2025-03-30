
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Download, LogIn, Save, Send, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Attendance = () => {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState("");
  const [date, setDate] = useState(new Date());
  const [sendAbsentSMS, setSendAbsentSMS] = useState(true);
  
  // Sample class list
  const classes = [
    { id: 1, name: "Primary 1" },
    { id: 2, name: "Primary 2" },
    { id: 3, name: "Primary 3" },
    { id: 4, name: "Primary 4" },
    { id: 5, name: "Primary 5" },
    { id: 6, name: "Primary 6" },
    { id: 7, name: "Primary 7" },
    { id: 8, name: "Senior 1" },
    { id: 9, name: "Senior 2" },
    { id: 10, name: "Senior 3" },
    { id: 11, name: "Senior 4" },
    { id: 12, name: "Senior 5" },
    { id: 13, name: "Senior 6" },
  ];

  // Sample student data - in a real application, this would come from an API
  const students = [
    { id: 1, name: "Alice Namuli", admissionNo: "S2301", attendance: "present" },
    { id: 2, name: "Brian Mukasa", admissionNo: "S2302", attendance: "present" },
    { id: 3, name: "Catherine Nalwoga", admissionNo: "S2303", attendance: "absent" },
    { id: 4, name: "David Ssempala", admissionNo: "S2304", attendance: "late" },
    { id: 5, name: "Eva Nakitto", admissionNo: "S2305", attendance: "present" },
    { id: 6, name: "Francis Okello", admissionNo: "S2306", attendance: "present" },
    { id: 7, name: "Grace Atim", admissionNo: "S2307", attendance: "absent" },
    { id: 8, name: "Henry Ouma", admissionNo: "S2308", attendance: "present" },
  ];

  // Sample monthly attendance summary per class
  const monthlyAttendance = [
    { class: "Senior 1", totalStudents: 40, avgAttendance: 92, perfectAttendance: 18 },
    { class: "Senior 2", totalStudents: 42, avgAttendance: 90, perfectAttendance: 15 },
    { class: "Senior 3", totalStudents: 38, avgAttendance: 88, perfectAttendance: 12 },
    { class: "Senior 4", totalStudents: 35, avgAttendance: 94, perfectAttendance: 20 },
  ];

  // Sample student-specific attendance history
  const studentAttendanceHistory = [
    { date: "2023-11-01", status: "present" },
    { date: "2023-11-02", status: "present" },
    { date: "2023-11-03", status: "present" },
    { date: "2023-11-06", status: "present" },
    { date: "2023-11-07", status: "absent" },
    { date: "2023-11-08", status: "present" },
    { date: "2023-11-09", status: "present" },
    { date: "2023-11-10", status: "late" },
    { date: "2023-11-13", status: "present" },
    { date: "2023-11-14", status: "present" },
    { date: "2023-11-15", status: "present" },
    { date: "2023-11-16", status: "present" },
    { date: "2023-11-17", status: "absent" },
    { date: "2023-11-20", status: "present" },
  ];

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = student.attendance;
      return acc;
    }, {})
  );

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const saveAttendance = () => {
    const absentCount = Object.values(attendance).filter(status => status === 'absent').length;
    
    toast({
      title: "Attendance Saved",
      description: `Attendance records for ${selectedClass || 'this class'} have been saved successfully.`
    });
    
    if (sendAbsentSMS && absentCount > 0) {
      toast({
        title: "SMS Notifications Sent",
        description: `Absence notifications sent to ${absentCount} parents via Mambo SMS.`
      });
    }
  };

  const generateAttendanceReport = () => {
    toast({
      title: "Report Generated",
      description: "Attendance report has been generated and is ready for download."
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Attendance Management</h2>
        <p className="text-muted-foreground">
          Track and manage student attendance records.
        </p>
      </div>

      <Tabs defaultValue="daily-attendance">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily-attendance">Daily Attendance</TabsTrigger>
          <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
          <TabsTrigger value="student-history">Student History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily-attendance">
          <Card>
            <CardHeader>
              <CardTitle>Mark Attendance</CardTitle>
              <CardDescription>
                Record daily attendance for selected class.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Class</Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map(cls => (
                        <SelectItem key={cls.id} value={cls.name}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  id="send-sms" 
                  checked={sendAbsentSMS} 
                  onCheckedChange={setSendAbsentSMS} 
                />
                <Label htmlFor="send-sms">
                  Send SMS notifications to parents of absent students via Mambo SMS
                </Label>
              </div>

              {selectedClass && (
                <Table>
                  <TableCaption>Attendance for {selectedClass} on {format(date, "PPP")}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Student Name</TableHead>
                      <TableHead>Admission No.</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.admissionNo}</TableCell>
                        <TableCell>
                          <Badge
                            className={cn(
                              attendance[student.id] === 'present' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                              attendance[student.id] === 'late' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                              'bg-red-100 text-red-800 hover:bg-red-200'
                            )}
                          >
                            {attendance[student.id] === 'present' ? 'Present' : 
                             attendance[student.id] === 'late' ? 'Late' : 'Absent'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant={attendance[student.id] === 'present' ? 'secondary' : 'outline'}
                              className="h-8 w-8 p-0"
                              onClick={() => handleAttendanceChange(student.id, 'present')}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant={attendance[student.id] === 'late' ? 'secondary' : 'outline'}
                              className="h-8 w-8 p-0"
                              onClick={() => handleAttendanceChange(student.id, 'late')}
                            >
                              <Clock className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant={attendance[student.id] === 'absent' ? 'secondary' : 'outline'}
                              className="h-8 w-8 p-0"
                              onClick={() => handleAttendanceChange(student.id, 'absent')}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              {selectedClass && (
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setAttendance(
                      students.reduce((acc, student) => {
                        acc[student.id] = 'present';
                        return acc;
                      }, {})
                    )}
                  >
                    Mark All Present
                  </Button>
                  <Button onClick={saveAttendance} className="flex items-center gap-2">
                    <Save size={16} />
                    <span>Save Attendance</span>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>
                View and analyze attendance patterns across classes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <LogIn className="mx-auto h-8 w-8 text-blue-500" />
                      <h3 className="mt-2 font-semibold">Overall Attendance</h3>
                      <p className="text-3xl font-bold mt-1">91%</p>
                      <p className="text-sm text-muted-foreground">This academic term</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Clock className="mx-auto h-8 w-8 text-amber-500" />
                      <h3 className="mt-2 font-semibold">Late Arrivals</h3>
                      <p className="text-3xl font-bold mt-1">5%</p>
                      <p className="text-sm text-muted-foreground">Of total attendance</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Check className="mx-auto h-8 w-8 text-green-500" />
                      <h3 className="mt-2 font-semibold">Perfect Attendance</h3>
                      <p className="text-3xl font-bold mt-1">65</p>
                      <p className="text-sm text-muted-foreground">Students with 100%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Attendance by Class (This Month)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Total Students</TableHead>
                      <TableHead>Average Attendance</TableHead>
                      <TableHead>Perfect Attendance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyAttendance.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.class}</TableCell>
                        <TableCell>{item.totalStudents} students</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span>{item.avgAttendance}%</span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full">
                              <div 
                                className={cn(
                                  "h-full rounded-full",
                                  item.avgAttendance > 90 ? "bg-green-500" : 
                                  item.avgAttendance > 80 ? "bg-amber-500" : "bg-red-500"
                                )}
                                style={{ width: `${item.avgAttendance}%` }}
                              ></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.perfectAttendance} students ({Math.round(item.perfectAttendance/item.totalStudents*100)}%)</TableCell>
                        <TableCell className="text-right">
                          <Button variant="link" className="h-8 p-0">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button onClick={generateAttendanceReport} className="flex items-center gap-2">
                  <Download size={16} />
                  <span>Generate Report</span>
                </Button>
                <Button className="flex items-center gap-2">
                  <Send size={16} />
                  <span>Email to Administration</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="student-history">
          <Card>
            <CardHeader>
              <CardTitle>Student Attendance History</CardTitle>
              <CardDescription>
                View detailed attendance records for individual students.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map(cls => (
                        <SelectItem key={cls.id} value={cls.name}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1 space-y-2">
                  <Label>Student</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map(student => (
                        <SelectItem key={student.id} value={student.id.toString()}>
                          {student.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1 space-y-2">
                  <Label>Month</Label>
                  <Select defaultValue="november">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="october">October 2023</SelectItem>
                      <SelectItem value="november">November 2023</SelectItem>
                      <SelectItem value="december">December 2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="border rounded-md p-4">
                  <h3 className="font-semibold text-lg mb-2">Alice Namuli - Attendance Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Present</div>
                        <div className="text-xl font-semibold">12 days</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Late</div>
                        <div className="text-xl font-semibold">1 day</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      <div>
                        <div className="text-sm text-muted-foreground">Absent</div>
                        <div className="text-xl font-semibold">2 days</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {[1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20].map(day => {
                      const historyItem = studentAttendanceHistory.find(h => {
                        const historyDate = new Date(h.date);
                        return historyDate.getDate() === day;
                      });
                      
                      const status = historyItem ? historyItem.status : null;
                      const color = status === 'present' ? 'bg-green-100' : 
                                     status === 'late' ? 'bg-amber-100' : 
                                     status === 'absent' ? 'bg-red-100' : 'bg-gray-100';
                      
                      return (
                        <div 
                          key={day} 
                          className={`h-12 rounded flex items-center justify-center ${color} ${status ? 'cursor-pointer' : ''}`}
                          title={status ? `November ${day}: ${status.charAt(0).toUpperCase() + status.slice(1)}` : ''}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm">Attendance rate: <span className="font-semibold">85.7%</span></div>
                    <div className="flex space-x-2">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs">Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-xs">Late</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-xs">Absent</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={16} />
                    <span>Export History</span>
                  </Button>
                  <Button className="flex items-center gap-2">
                    <Send size={16} />
                    <span>Send to Parent</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Attendance;
