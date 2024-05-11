'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/schemas/login.schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import login from '@/services/users/login';

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async values => {
    const res = await login(values);
    if (res?.status === 200) {
      // Redirect to dashboard
      console.log('Redirect to dashboard');
    } else {
      // Show error message
      console.log(res);
    }
  };

  return (
    <main className='container h-screen'>
      <div className='h-full flex justify-center items-center'>
        <div className='bg-card w-fit h-fit flex justify-center items-center rounded-md py-14 px-14'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <h1 className='text-5xl'>Ingresar</h1>
              <p className='text-xl mb-4'>
                Inicia sesión para administrar tu refugio.
              </p>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Correo</FormLabel> */}
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='Correo electrónico'
                        {...field}
                      />
                    </FormControl>

                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Contraseña'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Ingresar</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
