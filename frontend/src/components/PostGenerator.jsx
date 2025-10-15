import React, { useState } from 'react';
import { Wand2, ArrowLeft, Loader2, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { mockKeywords } from '../mock';

const PostGenerator = ({ onGenerate, onCancel }) => {
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [scheduledTime, setScheduledTime] = useState('6:00 AM');
  const [scheduledDate, setScheduledDate] = useState('');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    if (!selectedKeyword || !scheduledDate) {
      alert('Please select a keyword and date');
      return;
    }

    setGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const newPost = {
        id: Date.now().toString(),
        keyword: selectedKeyword,
        title: `Amazing insights about ${selectedKeyword} 💡`,
        linkedinPost: `Let me share something interesting about ${selectedKeyword} that I learned recently...\n\nAs a frontend developer, I've been exploring ${selectedKeyword} and discovered some game-changing patterns that completely transformed how I approach development.\n\nHere's what I learned:\n• Better performance\n• Cleaner code\n• Happier users\n\nThe key is to stay curious and never stop learning. Every day brings new opportunities to grow and improve your craft.\n\nWhat's your experience with ${selectedKeyword}? I'd love to hear your thoughts!`,
        xPost: `Just discovered something amazing about ${selectedKeyword} 🔥\n\nAs a frontend dev, this changed my whole approach:\n✅ Better performance\n✅ Cleaner code\n✅ Happier users\n\nStay curious, keep learning.\n\n#WebDev #Frontend`,
        hashtags: `#${selectedKeyword.replace(/\s+/g, '')} #FrontendDev #WebDevelopment #JavaScript`,
        scheduledTime,
        scheduledDate,
        status: 'draft',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        createdAt: new Date().toISOString()
      };

      setGenerating(false);
      onGenerate(newPost);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={onCancel}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Generate New Post</h1>
              <p className="text-sm text-gray-600">AI-powered content creation</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-indigo-600" />
              AI Content Generator
            </CardTitle>
            <CardDescription>
              Select a keyword and schedule to generate engaging LinkedIn and X posts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Keyword Selection */}
            <div className="space-y-2">
              <Label htmlFor="keyword">Select Keyword</Label>
              <Select value={selectedKeyword} onValueChange={setSelectedKeyword}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a keyword..." />
                </SelectTrigger>
                <SelectContent>
                  {mockKeywords.map((keyword) => (
                    <SelectItem key={keyword} value={keyword}>
                      {keyword}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Schedule Time */}
            <div className="space-y-2">
              <Label htmlFor="time">Scheduled Time</Label>
              <Select value={scheduledTime} onValueChange={setScheduledTime}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6:00 AM">6:00 AM</SelectItem>
                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Schedule Date */}
            <div className="space-y-2">
              <Label htmlFor="date">Scheduled Date</Label>
              <Input 
                type="date" 
                id="date"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Info Box */}
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <div className="flex items-start gap-3">
                <ImageIcon className="w-5 h-5 text-indigo-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-indigo-900 mb-1">AI-Generated Content</h4>
                  <p className="text-sm text-indigo-700">
                    Our AI will create engaging, story-driven posts with relevant images for both LinkedIn and X platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              onClick={handleGenerate}
              disabled={generating || !selectedKeyword || !scheduledDate}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {generating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating your content...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 mr-2" />
                  Generate Post
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PostGenerator;
