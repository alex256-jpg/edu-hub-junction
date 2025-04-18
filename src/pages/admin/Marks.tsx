
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Search, Save, Download, FileSpreadsheet, UserPlus } from "lucide-react";

const Marks = () => {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [markEntries, setMarkEntries] = useState({});
  
  // Mock data for demonstration
  const students = [
    { id: 1, name: "Alice Namuli", admissionNumber: "CBC001" },
    { id: 2, name: "Bob Mukasa", admissionNumber: "CBC002" },
    { id: 3, name: "Carol Nakato", admissionNumber: "CBC003" },
    { id: 4, name: "David Okello", admissionNumber: "CBC004" },
    { id: 5, name: "Eva Kizza", admissionNumber: "CBC005" },
  ];

  const classes = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "S1", "S2", "S3", "S4", "S5", "S6"];
  
  const subjects = [
    "English Language", 
    "Mathematics", 
    "Science", 
    "Social Studies",
    "Creative Arts",
    "Physical Education",
    "Religious Education",
    "Local Language",
    "Kiswahili",
    "ICT"
  ];
  
  const assessmentTypes = [
    "Formative Assessment",
    "Project Work",
    "End of Topic Test", 
    "Mid-Term Exam",
    "End of Term Exam"
  ];

  const handleSearch = () => {
    // In a real app, this would fetch student data from a database
    console.log("Searching for:", { selectedClass, selectedSubject, selectedTerm, selectedAssessment });
    toast({
      title: "Search Complete",
      description: `Loaded marks for ${selectedClass} - ${selectedSubject}`,
    });
  };

  const handleMarkChange = (studentId, value) => {
    setMarkEntries(prev => ({
      ...prev,
      [studentId]: value
    }));
  };

  const handleSaveMarks = () => {
    // In a real app, this would save the marks to a database
    console.log("Saving marks:", markEntries);
    toast({
      title: "Marks Saved",
      description: `Successfully saved marks for ${selectedClass} - ${selectedSubject}`,
    });
  };

  const handleExportMarks = () => {
    // In a real app, this would export marks to Excel/CSV
    console.log("Exporting marks");
    toast({
      title: "Export Started",
      description: "Marks are being exported to spreadsheet",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Marks Entry</h2>
          <p className="text-muted-foreground">
            Record and manage student marks using the CBC assessment framework
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleExportMarks}>
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="term">Term</Label>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term1">Term 1</SelectItem>
                  <SelectItem value="term2">Term 2</SelectItem>
                  <SelectItem value="term3">Term 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="assessment">Assessment Type</Label>
              <Select value={selectedAssessment} onValueChange={setSelectedAssessment}>
                <SelectTrigger>
                  <SelectValue placeholder="Select assessment" />
                </SelectTrigger>
                <SelectContent>
                  {assessmentTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            className="mt-4" 
            onClick={handleSearch}
            disabled={!selectedClass || !selectedSubject || !selectedTerm || !selectedAssessment}
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      {selectedClass && selectedSubject && selectedTerm && (
        <Card>
          <CardHeader>
            <CardTitle>
              Mark Entry for {selectedClass} - {selectedSubject} ({selectedTerm})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">No.</TableHead>
                    <TableHead className="w-[180px]">Adm No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="w-[150px]">Mark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student, index) => (
                    <TableRow key={student.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{student.admissionNumber}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        <Input 
                          type="number" 
                          min="0"
                          max="100"
                          placeholder="0-100"
                          value={markEntries[student.id] || ''}
                          onChange={(e) => handleMarkChange(student.id, e.target.value)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button onClick={handleSaveMarks}>
                <Save className="mr-2 h-4 w-4" />
                Save Marks
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Marks;
