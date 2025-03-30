
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Printer, RefreshCw, Send } from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const ReportCards = () => {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("Term 3");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [sendSMS, setSendSMS] = useState(true);

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
    { id: 1, name: "Alice Namuli", admissionNo: "S2301" },
    { id: 2, name: "Brian Mukasa", admissionNo: "S2302" },
    { id: 3, name: "Catherine Nalwoga", admissionNo: "S2303" },
    { id: 4, name: "David Ssempala", admissionNo: "S2304" },
    { id: 5, name: "Eva Nakitto", admissionNo: "S2305" },
  ];

  // Sample subject data with marks
  const subjects = [
    { id: 1, name: "Mathematics", marks: 85, grade: "D1" },
    { id: 2, name: "English", marks: 76, grade: "D2" },
    { id: 3, name: "Science", marks: 68, grade: "C3" },
    { id: 4, name: "Social Studies", marks: 72, grade: "D2" },
    { id: 5, name: "Kiswahili", marks: 65, grade: "C3" },
    { id: 6, name: "Religious Education", marks: 78, grade: "D2" },
    { id: 7, name: "ICT", marks: 82, grade: "D1" },
  ];

  const competencies = [
    { name: "Communication", rating: "Good" },
    { name: "Critical Thinking", rating: "Excellent" },
    { name: "Creativity", rating: "Good" },
    { name: "Collaboration", rating: "Excellent" },
    { name: "ICT & Digital Literacy", rating: "Satisfactory" },
    { name: "Self-Directed Learning", rating: "Good" },
  ];

  const generateReportCards = () => {
    if (!selectedClass || !selectedTerm) {
      toast({
        title: "Missing Information",
        description: "Please select both class and term to generate report cards",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Report Cards Generated",
      description: "Report cards have been generated successfully",
    });
  };

  const printReportCard = () => {
    toast({
      title: "Printing Report Card",
      description: "Report card sent to printer",
    });
  };

  const sendReportCardSMS = () => {
    toast({
      title: "SMS Notifications Sent",
      description: "Report card summaries have been sent via Mambo SMS to parents",
    });
  };

  // Calculate student performance statistics
  const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const averageMark = (totalMarks / subjects.length).toFixed(1);
  
  // Get overall grade based on average mark
  const getOverallGrade = (mark) => {
    if (mark >= 80) return { grade: "D1", comment: "EXCELLENT" };
    if (mark >= 70) return { grade: "D2", comment: "VERY GOOD" };
    if (mark >= 60) return { grade: "C3", comment: "GOOD" };
    if (mark >= 55) return { grade: "C4", comment: "FAIRLY GOOD" };
    if (mark >= 50) return { grade: "C5", comment: "CREDIT" };
    if (mark >= 45) return { grade: "C6", comment: "SATISFACTORY" };
    if (mark >= 40) return { grade: "P7", comment: "PASS" };
    if (mark >= 35) return { grade: "P8", comment: "FAIR" };
    return { grade: "F9", comment: "NEEDS IMPROVEMENT" };
  };

  const overallGradeInfo = getOverallGrade(averageMark);
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Report Cards</h2>
        <p className="text-muted-foreground">
          Generate and manage student report cards based on the CBC curriculum and UNEB grading.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report Cards</CardTitle>
          <CardDescription>
            Select a class and term to generate report cards for all students.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="class">Class</label>
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
              <label htmlFor="term">Term</label>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Term 1">Term 1</SelectItem>
                  <SelectItem value="Term 2">Term 2</SelectItem>
                  <SelectItem value="Term 3">Term 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="student">Student (Optional)</label>
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger>
                <SelectValue placeholder="Select student or leave blank for all" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Students</SelectItem>
                {students.map(student => (
                  <SelectItem key={student.id} value={student.name}>
                    {student.name} ({student.admissionNo})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2 pt-4">
            <Switch 
              id="sms-notification" 
              checked={sendSMS} 
              onCheckedChange={setSendSMS} 
            />
            <Label htmlFor="sms-notification">
              Send SMS notification to parents via Mambo SMS
            </Label>
          </div>

          <div className="pt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={generateReportCards} className="flex items-center gap-2">
              <RefreshCw size={16} />
              <span>Generate Report Cards</span>
            </Button>
            
            {sendSMS && (
              <Button onClick={sendReportCardSMS} className="flex items-center gap-2">
                <Send size={16} />
                <span>Send SMS Notifications</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Sample Report Card Preview */}
      <Card className="border-2 border-blue-200">
        <CardHeader className="border-b bg-blue-50">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-bold text-blue-800">EduHub Junction Secondary School</h3>
            <p className="text-sm">123 Education Lane, Kampala, Uganda</p>
            <p className="text-lg font-semibold">Student Progress Report</p>
            <div className="flex justify-center items-center space-x-2 pt-2">
              <Badge className="text-base px-4 py-1 bg-blue-600">{selectedTerm || "Term 3"} 2023</Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Student Name:</span> Alice Namuli</p>
              <p><span className="font-semibold">Admission No:</span> S2301</p>
              <p><span className="font-semibold">Class:</span> Senior 2</p>
            </div>
            <div className="text-right">
              <p><span className="font-semibold">Position:</span> 3 out of 45</p>
              <p><span className="font-semibold">Average Mark:</span> {averageMark}%</p>
              <p><span className="font-semibold">Overall Grade:</span> {overallGradeInfo.grade}</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Academic Performance</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">Mark (%)</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjects.map((subject) => {
                  const remarkMap = {
                    "D1": "Excellent",
                    "D2": "Very Good",
                    "C3": "Good",
                    "C4": "Fairly Good",
                    "C5": "Credit",
                    "C6": "Satisfactory",
                    "P7": "Pass",
                    "P8": "Fair",
                    "F9": "Needs Improvement"
                  };
                  
                  return (
                    <TableRow key={subject.id}>
                      <TableCell>{subject.name}</TableCell>
                      <TableCell className="text-center">{subject.marks}</TableCell>
                      <TableCell className="text-center font-semibold">{subject.grade}</TableCell>
                      <TableCell>{remarkMap[subject.grade] || "N/A"}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Competency Based Assessment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span>{competency.name}</span>
                  <Badge variant="outline" className={
                    competency.rating === "Excellent" ? "bg-green-50 text-green-700 border-green-200" :
                    competency.rating === "Good" ? "bg-blue-50 text-blue-700 border-blue-200" :
                    competency.rating === "Satisfactory" ? "bg-amber-50 text-amber-700 border-amber-200" :
                    "bg-red-50 text-red-700 border-red-200"
                  }>
                    {competency.rating}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Class Teacher's Comments</h4>
            <div className="border rounded-md p-3 bg-gray-50">
              <p>Alice is a hardworking student who consistently demonstrates excellent academic ability. 
              She participates well in class discussions and shows strong leadership qualities. 
              Keep up the good work!</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Head Teacher's Comments</h4>
            <div className="border rounded-md p-3 bg-gray-50">
              <p>Alice has shown great progress this term. She's well-positioned to excel in her academics. 
              I encourage her to maintain this performance and continue developing her skills in all areas.</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4">
            <div className="text-sm text-muted-foreground">
              <p><Calendar size={14} className="inline mr-1" /> Report Generated: {new Date().toLocaleDateString()}</p>
            </div>
            <Button onClick={printReportCard} className="flex items-center gap-2">
              <Printer size={16} />
              <span>Print Report Card</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportCards;
