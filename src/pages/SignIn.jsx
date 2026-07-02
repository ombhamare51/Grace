import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Sign in values:', values);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-[#E6E1FF] via-[#FCE3ED] to-[#FFF1E4]">
      {/* Background Radial Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: 'repeating-conic-gradient(from 0deg, black 0deg, black 0.1deg, transparent 0.1deg, transparent 15deg)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: 'repeating-conic-gradient(from 0deg, transparent 0deg, transparent 7.5deg, black 7.5deg, black 7.6deg, transparent 7.6deg, transparent 15deg)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Top Badge */}
        <div className="bg-[#FBE285] text-[#7A6400] text-sm font-semibold px-4 py-1.5 rounded-lg mb-6 shadow-sm">
          Grace Login
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
          Grace!
        </h1>

        {/* Form Card */}
        <div className="w-full max-w-[440px] p-8 md:p-10 rounded-2xl border border-white/50 bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(150,120,200,0.1)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-sm">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="batuhankra312@gmail.com" 
                        type="email" 
                        {...field} 
                        className="bg-white/90 border-white/80 rounded-xl h-12 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:border-transparent transition-all shadow-sm text-gray-900 px-4" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-sm">Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="••••••••" 
                        type="password" 
                        {...field} 
                        className="bg-white/90 border-white/80 rounded-xl h-12 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:border-transparent transition-all shadow-sm text-gray-900 px-4 tracking-[0.3em]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative w-5 h-5 bg-white rounded border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-purple-300 transition-colors">
                    <input 
                      type="checkbox" 
                      className="peer absolute inset-0 opacity-0 cursor-pointer" 
                    />
                    <svg className="w-3.5 h-3.5 text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Remember me</span>
                </label>
                <Link to="#" className="text-sm font-bold text-gray-900 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full rounded-2xl h-14 mt-6 bg-[#111111] hover:bg-black text-white font-medium text-base transition-all shadow-lg shadow-black/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Logging In...
                  </>
                ) : (
                  "Log In"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
