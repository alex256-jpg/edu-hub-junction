
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Bell, 
  Calendar, 
  Check, 
  CreditCard, 
  Download, 
  Plus,
  Send, 
  Settings, 
  UserX 
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const SmsNotifications = () => {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedRecipients, setSelectedRecipients] = useState("specific-class");
  const [selectedClass, setSelectedClass] = useState("");
  const [testNumber, setTestNumber] = useState("");

  // Sample SMS templates
  const templates = [
    { id: 1, name: "Fee Reminder", message: "Dear Parent/Guardian, This is a reminder that your child's school fees balance of UGX [AMOUNT] is due by [DATE]. Please make payment to avoid inconvenience. Thank you." },
    { id: 2, name: "Attendance Alert", message: "Dear Parent/Guardian, Please note that your child [NAME] was absent from school today ([DATE]). Kindly provide a reason for the absence. Thank you." },
    { id: 3, name: "Exam Results", message: "Dear Parent/Guardian, Your child [NAME]'s exam results are now available. Average score: [SCORE]%, Position: [POSITION]. Please check the student portal for details." },
    { id: 4, name: "School Meeting", message: "Dear Parent/Guardian, You are invited to attend a parents' meeting on [DATE] at [TIME] to discuss [TOPIC]. Your attendance is important. Thank you." },
    { id: 5, name: "School Event", message: "Dear Parent/Guardian, Please be informed that [EVENT_NAME] will be held on [DATE] at [TIME]. Your child should [SPECIAL_INSTRUCTIONS]." },
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

  // Sample SMS logs
  const smsLogs = [
    { id: 1, type: "Fee Reminder", recipients: 45, sent: "2023-11-20 14:30", cost: "UGX 1,350", status: "Delivered" },
    { id: 2, type: "Attendance Alert", recipients: 12, sent: "2023-11-20 09:15", cost: "UGX 360", status: "Delivered" },
    { id: 3, type: "Exam Results", recipients: 120, sent: "2023-11-15 16:45", cost: "UGX 3,600", status: "Delivered" },
    { id: 4, type: "Fee Reminder", recipients: 38, sent: "2023-11-10 11:20", cost: "UGX 1,140", status: "Delivered" },
    { id: 5, type: "School Meeting", recipients: 180, sent: "2023-11-05 13:00", cost: "UGX 5,400", status: "Delivered" },
  ];

  const handleTemplateChange = (value) => {
    setSelectedTemplate(value);
    const template = templates.find(t => t.id.toString() === value);
    if (template) {
      setMessageText(template.message);
    }
  };

  const sendTestSMS = () => {
    if (!testNumber) {
      toast({
        title: "Error",
        description: "Please enter a test phone number",
        variant: "destructive",
      });
      return;
    }

    if (!messageText) {
      toast({
        title: "Error",
        description: "Please enter a message or select a template",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Test SMS Sent",
      description: `Test message sent to ${testNumber} via Mambo SMS`,
    });
  };

  const sendBulkSMS = () => {
    if (!messageText) {
      toast({
        title: "Error",
        description: "Please enter a message or select a template",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedRecipients === "specific-class" && !selectedClass) {
      toast({
        title: "Error",
        description: "Please select a class",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bulk SMS Queued",
      description: `Your messages are being sent to ${selectedRecipients === "all-parents" ? "all parents" : `${selectedClass} parents`} via Mambo SMS`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">SMS Notifications</h2>
        <p className="text-muted-foreground">
          Send SMS notifications to parents using Mambo SMS integration.
        </p>
      </div>

      <Tabs defaultValue="send-sms">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="send-sms">Send SMS</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="history">History & Usage</TabsTrigger>
        </TabsList>
        
        <TabsContent value="send-sms">
          <Card>
            <CardHeader>
              <CardTitle>Compose SMS</CardTitle>
              <CardDescription>
                Send SMS notifications to parents or guardians.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Message Template (Optional)</Label>
                <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template or write a custom message" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Templates</SelectLabel>
                      {templates.map(template => (
                        <SelectItem key={template.id} value={template.id.toString()}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message Text</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your SMS message here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="min-h-32"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Use [NAME], [AMOUNT], [DATE], etc. as placeholders</span>
                  <span>{messageText.length} characters (Est. {Math.ceil(messageText.length / 160)} SMS units)</span>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <div>
                  <Label>Select Recipients</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="all-parents" 
                        checked={selectedRecipients === "all-parents"} 
                        onChange={() => setSelectedRecipients("all-parents")}
                      />
                      <Label htmlFor="all-parents">All Parents/Guardians</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="specific-class" 
                        checked={selectedRecipients === "specific-class"} 
                        onChange={() => setSelectedRecipients("specific-class")}
                      />
                      <Label htmlFor="specific-class">Specific Class</Label>
                    </div>
                  </div>
                </div>
                
                {selectedRecipients === "specific-class" && (
                  <div className="space-y-2">
                    <Label htmlFor="class">Select Class</Label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a class" />
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
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="space-y-2 flex-1 max-w-xs">
                <Label htmlFor="test-number">Test Phone Number</Label>
                <div className="flex gap-2">
                  <Input 
                    id="test-number" 
                    placeholder="+256..." 
                    value={testNumber}
                    onChange={(e) => setTestNumber(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    onClick={sendTestSMS}
                  >
                    Test
                  </Button>
                </div>
              </div>
              <Button onClick={sendBulkSMS} className="flex items-center gap-2">
                <Send size={16} />
                <span>Send SMS</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>SMS Templates</CardTitle>
              <CardDescription>
                Manage your SMS templates for different purposes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map(template => (
                  <Card key={template.id} className="border shadow-none">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                      {template.message}
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => {
                          setSelectedTemplate(template.id.toString());
                          setMessageText(template.message);
                          toast({
                            title: "Template Selected",
                            description: `${template.name} template loaded to composer`
                          });
                        }}
                      >
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                <Button className="w-full" variant="outline">
                  <Plus size={16} className="mr-2" />
                  Add New Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>SMS History & Usage</CardTitle>
              <CardDescription>
                View your SMS sending history and manage your Mambo SMS credits.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Bell className="mx-auto h-8 w-8 text-blue-500" />
                      <h3 className="mt-2 font-semibold">SMS Balance</h3>
                      <p className="text-3xl font-bold mt-1">2,500</p>
                      <p className="text-sm text-muted-foreground">SMS Credits</p>
                      <Button variant="outline" className="mt-2 w-full">Buy Credits</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Send className="mx-auto h-8 w-8 text-green-500" />
                      <h3 className="mt-2 font-semibold">Total Sent (This Month)</h3>
                      <p className="text-3xl font-bold mt-1">487</p>
                      <p className="text-sm text-muted-foreground">SMS Messages</p>
                      <Button variant="outline" className="mt-2 w-full">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <CreditCard className="mx-auto h-8 w-8 text-amber-500" />
                      <h3 className="mt-2 font-semibold">Total Cost (This Month)</h3>
                      <p className="text-3xl font-bold mt-1">UGX 14,610</p>
                      <p className="text-sm text-muted-foreground">@ UGX 30 per SMS</p>
                      <Button variant="outline" className="mt-2 w-full">Download Invoice</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Recent SMS Logs</h3>
                <Table>
                  <TableCaption>Recent SMS sending activity</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {smsLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.type}</TableCell>
                        <TableCell>{log.recipients} contacts</TableCell>
                        <TableCell>{log.sent}</TableCell>
                        <TableCell>{log.cost}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check size={12} className="mr-1" />
                            {log.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={16} />
                    <span>Export Logs</span>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Mambo SMS Settings</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sender-id">Sender ID</Label>
                      <Input id="sender-id" defaultValue="EDUHUB" />
                      <p className="text-xs text-muted-foreground">The name that appears as the sender of your SMS</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sms-cost">Cost Per SMS (UGX)</Label>
                      <Input id="sms-cost" type="number" defaultValue="30" />
                      <p className="text-xs text-muted-foreground">Cost of each SMS unit for budget tracking</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="low-balance-alert">Low Balance Alert</Label>
                        <p className="text-xs text-muted-foreground">Get notified when SMS credits are running low</p>
                      </div>
                      <Switch id="low-balance-alert" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="delivery-reports">Delivery Reports</Label>
                        <p className="text-xs text-muted-foreground">Track delivery status of sent messages</p>
                      </div>
                      <Switch id="delivery-reports" defaultChecked />
                    </div>
                  </div>
                  
                  <Button className="flex items-center gap-2">
                    <Settings size={16} />
                    <span>Save Settings</span>
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

export default SmsNotifications;
