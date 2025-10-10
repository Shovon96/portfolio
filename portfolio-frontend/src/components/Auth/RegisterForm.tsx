"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Password from "../ui/Password"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"

export const Role = z.enum(["USER", "ADMIN"] as const, { message: "Role is required" })

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().optional(),
  avatarUrl: z.string().url("Must be a valid URL").optional(),
  location: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  Role: Role
})

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
      avatarUrl: "",
      location: "",
      github: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      Role: "USER",
    },
  })
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values)

      })
      const data = await res.json()
      // console.log(data)
      if (data) {
        toast.success("User registered successfully")
        router.push("/")
      } else {
        toast.error(data.message || "Registration failed")
      }
      setLoading(false)

    } catch (error: any) {
      console.log(error.message)
    }

  }

  return (
    <div className="flex justify-center items-center p-12"
      style={{ backgroundImage: 'url("https://i.ibb.co.com/4nDvt3Rv/login-background-image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl bg-white/40 backdrop-blur-md dark:bg-black/80">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            Create Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Avatar URL */}
              <FormField
                control={form.control}
                name="avatarUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avatar URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/avatar.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Short Bio</FormLabel>
                    <FormControl>
                      <Input placeholder="A short introduction about you" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Role */}
              <FormField
                control={form.control}
                name="Role"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full border rounded p-2"
                      >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Select your role. Admin role is usually restricted.
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, Country" {...field} required={false} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Social Links */}
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub</FormLabel>
                    <FormControl>
                      <Input placeholder="https://github.com/username" {...field} required={false} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/username" {...field} required={false} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input placeholder="https://facebook.com/username" {...field} required={false} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input placeholder="https://twitter.com/username" {...field} required={false} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="col-span-2 flex flex-col items-center">
                <Button type="submit" disabled={loading} className="w-full md:w-1/2 my-3 text-base font-semibold text-white bg-primary hover:bg-primary/80 cursor-pointer">
                  {loading ? "Registering..." : "Register"}
                </Button>
                <p>Already have an account? <Link href="/login" className="text-primary hover:underline">Login</Link></p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
