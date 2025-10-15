import React from 'react';
import { ArrowLeft, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const PostPreview = ({ post, onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Preview Post</h1>
              <p className="text-sm text-gray-600">How your content will look on social media</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LinkedIn Preview */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn Post
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                  FD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Frontend Developer</p>
                  <p className="text-sm text-gray-600">Just now</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900">{post.title}</h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{post.linkedinPost}</p>
              </div>

              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt="Post" 
                  className="w-full rounded-lg shadow-md"
                />
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {post.hashtags.split(' ').map((tag, idx) => (
                  <span key={idx} className="text-sm text-blue-600 font-medium">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t text-sm text-gray-600">
                <span>👍 Like</span>
                <span>💬 Comment</span>
                <span>🔄 Repost</span>
                <span>📤 Send</span>
              </div>
            </CardContent>
          </Card>

          {/* X (Twitter) Preview */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <CardTitle className="flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                X (Twitter) Post
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                  FD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold text-gray-900">Frontend Dev</p>
                    <span className="text-gray-500">@frontenddev</span>
                    <span className="text-gray-500">· now</span>
                  </div>
                  <p className="text-gray-900 whitespace-pre-line leading-relaxed mb-3">{post.xPost}</p>
                  
                  {post.imageUrl && (
                    <img 
                      src={post.imageUrl} 
                      alt="Post" 
                      className="w-full rounded-lg border"
                    />
                  )}

                  <div className="flex items-center gap-8 pt-3 text-sm text-gray-600">
                    <span>💬 Reply</span>
                    <span>🔄 Repost</span>
                    <span>❤️ Like</span>
                    <span>📊 View</span>
                    <span>📤 Share</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Post Metadata */}
        <Card className="mt-6 border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Post Metadata</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Keyword</p>
                <Badge className="mt-1">{post.keyword}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <Badge className="mt-1 capitalize">{post.status}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Scheduled Date</p>
                <p className="font-medium mt-1">{post.scheduledDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Scheduled Time</p>
                <p className="font-medium mt-1">{post.scheduledTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PostPreview;
