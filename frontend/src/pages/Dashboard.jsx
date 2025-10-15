import React, { useState, useEffect } from 'react';
import { Calendar, Clock, TrendingUp, FileText, Plus, Edit2, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockPosts, mockStats, mockKeywords } from '../mock';
import PostGenerator from '../components/PostGenerator';
import PostEditor from '../components/PostEditor';
import PostPreview from '../components/PostPreview';

const Dashboard = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [stats, setStats] = useState(mockStats);
  const [showGenerator, setShowGenerator] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [previewPost, setPreviewPost] = useState(null);

  const handleGeneratePost = (newPost) => {
    setPosts([newPost, ...posts]);
    setShowGenerator(false);
  };

  const handleEditPost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'draft': return 'bg-gray-500/10 text-gray-600 border-gray-200';
      case 'published': return 'bg-green-500/10 text-green-600 border-green-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  if (showGenerator) {
    return <PostGenerator onGenerate={handleGeneratePost} onCancel={() => setShowGenerator(false)} />;
  }

  if (editingPost) {
    return <PostEditor post={editingPost} onSave={handleEditPost} onCancel={() => setEditingPost(null)} />;
  }

  if (previewPost) {
    return <PostPreview post={previewPost} onClose={() => setPreviewPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ContentAI
              </h1>
              <p className="text-sm text-gray-600 mt-1">Your AI-powered content creator</p>
            </div>
            <Button 
              onClick={() => setShowGenerator(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              Generate Post
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-700">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-blue-900">{stats.totalPosts}</p>
                <FileText className="w-8 h-8 text-blue-600 opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-700">Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-purple-900">{stats.scheduledPosts}</p>
                <Clock className="w-8 h-8 text-purple-600 opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-700">Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-green-900">{stats.engagementRate}</p>
                <TrendingUp className="w-8 h-8 text-green-600 opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-700">Avg Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-orange-900">{stats.avgViews}</p>
                <Calendar className="w-8 h-8 text-orange-600 opacity-60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords Section */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Keywords Pool</CardTitle>
            <CardDescription>Topics for content generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {mockKeywords.map((keyword, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-0 hover:from-indigo-200 hover:to-purple-200 transition-all cursor-pointer"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Recent Posts</CardTitle>
            <CardDescription>View and manage your generated content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="p-6 border rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs font-medium">
                          {post.keyword}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(post.status)}`}>
                          {post.status}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.scheduledTime} • {post.scheduledDate}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.linkedinPost}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.hashtags.split(' ').map((tag, idx) => (
                          <span key={idx} className="text-xs text-indigo-600">{tag}</span>
                        ))}
                      </div>
                    </div>
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt="Post preview" 
                        className="w-32 h-32 object-cover rounded-lg shadow-sm"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setPreviewPost(post)}
                      className="hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setEditingPost(post)}
                      className="hover:bg-purple-50 hover:text-purple-700"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                      className="hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
