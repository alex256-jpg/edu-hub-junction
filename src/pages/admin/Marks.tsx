
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { CheckCircle, Save } from "lucide-react";

const Marks = () => {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("Term 3");
  const [markType, setMarkType] = useState("continuous-assessment");

  // Sample student data - in a real application, this would come from an API
  const students = [
    { id: 1, name: "Alice Namuli", admissionNo: "S2301" },
    { id: 2, name: "Brian Mukasa", admissionNo: "S2302" },
    { id: 3, name: "Catherine Nalwoga", admissionNo: "S2303" },
    { id: 4, name: "David Ssempala", admissionNo: "S2304" },
    { id: 5, name: "Eva Nakitto", admissionNo: "S2305" },
  ];

  // CBC Competencies for Uganda
  const competencies = [
    { id: 1, name: "Communication" },
    { id: 2, name: "Critical Thinking" },
    { id: 3, name: "Creativity" },
    { id: 4, name: "Collaboration" },
    { id: 5, name: "ICT & Digital Literacy" },
    { id: 6, name: "Self-Directed Learning" },
  ];

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

  // Sample subject list - would be filtered based on class selection in a real app
  const subjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "English" },
    { id: 3, name: "Science" },
    { id: 4, name: "Social Studies" },
    { id: 5, name: "Kiswahili" },
    { id: 6, name: "Physical Education" },
    { id: 7, name: "Creative Arts" },
  ];

  // State for student marks
  const [marks, setMarks] = useState({});

  const handleMarkChange = (studentId, value) => {
    // Validate input to ensure it's a number between 0 and 100
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0 || numValue > 100) return;
    
    setMarks(prevMarks => ({
      ...prevMarks,
      [studentId]: numValue
    }));
  };

  const handleCompetencyRating = (studentId, competencyId, value) => {
    setMarks(prevMarks => ({
      ...prevMarks,
      [`${studentId}_comp_${competencyId}`]: value
    }));
  };

  const getCompetencyRating = (studentId, competencyId) => {
    return marks[`${studentId}_comp_${competencyId}`] || "";
  };

  const saveMarks = () => {
    // This would send the marks to the backend in a real application
    console.log("Saving marks:", marks);
    toast({
      title: "Marks Saved",
      description: "Student marks have been saved successfully.",
      variant: "success",
    });
  };

  // UNEB Grading system
  const getGrade = (mark) => {
    if (mark >= 80) return { grade: "D1", comment: "Distinction 1" };
    if (mark >= 70) return { grade: "D2", comment: "Distinction 2" };
    if (mark >= 60) return { grade: "C3", comment: "Credit 3" };
    if (mark >= 55) return { grade: "C4", comment: "Credit 4" };
    if (mark >= 50) return { grade: "C5", comment: "Credit 5" };
    if (mark >= 45) return { grade: "C6", comment: "Credit 6" };
    if (mark >= 40) return { grade: "P7", comment: "Pass 7" };
    if (mark >= 35) return { grade: "P8", comment: "Pass 8" };
    return { grade: "F9", comment: "Fail" };
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Student Marks Entry</h2>
        <p className="text-muted-foreground">
          Enter and manage student assessment marks based on CBC curriculum.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Class and Subject</CardTitle>
          <CardDescription>
            Choose the class and subject to enter marks for current term.
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
              <label htmlFor="subject">Subject</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(subject => (
                    <SelectItem key={subject.id} value={subject.name}>
                      {subject.name}
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
        </CardContent>
      </Card>

      {selectedClass && selectedSubject && (
        <Card>
          <CardHeader>
            <CardTitle>Assessment Marks for {selectedClass} - {selectedSubject}</CardTitle>
            <CardDescription>
              Enter marks for each student based on the CBC curriculum.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={markType} onValueChange={setMarkType}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="continuous-assessment">Continuous Assessment</TabsTrigger>
                <TabsTrigger value="competency-based">Competency Based</TabsTrigger>
                <TabsTrigger value="end-term">End of Term Assessment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="continuous-assessment">
                <Table>
                  <TableCaption>Continuous Assessment for {selectedClass} - {selectedSubject}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Student Name</TableHead>
                      <TableHead>Admission No.</TableHead>
                      <TableHead className="text-right">Mark (%)</TableHead>
                      <TableHead className="text-right">Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => {
                      const mark = marks[student.id] || "";
                      const gradeInfo = mark ? getGrade(mark) : { grade: "-", comment: "" };
                      
                      return (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.admissionNo}</TableCell>
                          <TableCell className="text-right">
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={mark}
                              onChange={(e) => handleMarkChange(student.id, e.target.value)}
                              className="w-20 ml-auto"
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <span title={gradeInfo.comment}>{gradeInfo.grade}</span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="competency-based">
                <div className="overflow-x-auto">
                  <Table>
                    <TableCaption>Competency Based Assessment for {selectedClass} - {selectedSubject}</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Student Name</TableHead>
                        {competencies.map((competency) => (
                          <TableHead key={competency.id}>{competency.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          {competencies.map((competency) => (
                            <TableCell key={competency.id}>
                              <Select
                                value={getCompetencyRating(student.id, competency.id)}
                                onValueChange={(value) => handleCompetencyRating(student.id, competency.id, value)}
                              >
                                <SelectTrigger className="w-24">
                                  <SelectValue placeholder="Rate" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Excellent">Excellent</SelectItem>
                                  <SelectItem value="Good">Good</SelectItem>
                                  <SelectItem value="Satisfactory">Satisfactory</SelectItem>
                                  <SelectItem value="Needs Improvement">Needs Improvement</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="end-term">
                <Table>
                  <TableCaption>End of Term Assessment for {selectedClass} - {selectedSubject}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Student Name</TableHead>
                      <TableHead>Admission No.</TableHead>
                      <TableHead className="text-right">Exam Mark (%)</TableHead>
                      <TableHead className="text-right">UNEB Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => {
                      const mark = marks[`exam_${student.id}`] || "";
                      const gradeInfo = mark ? getGrade(mark) : { grade: "-", comment: "" };
                      
                      return (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.admissionNo}</TableCell>
                          <TableCell className="text-right">
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={mark}
                              onChange={(e) => handleMarkChange(`exam_${student.id}`, e.target.value)}
                              className="w-20 ml-auto"
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <span title={gradeInfo.comment}>{gradeInfo.grade}</span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex justify-end">
              <Button onClick={saveMarks} className="flex items-center gap-2">
                <Save size={16} />
                <span>Save Marks</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Marks;
