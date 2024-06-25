import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/schemas/login.schema';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useUser } from '@/context/userContext';

export default function RegisterCard({ setHasAccount }) {
  // * Hooks
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const { register } = useUser();

  // * Methods
  const onSubmit = async values => {
    const isOk = await register(values);
    if (isOk) router.push('/admin');
  };

  return (
    <div className='bg-card w-fit h-fit flex justify-center items-center rounded-md py-14 px-14'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <h1 className='text-5xl'>Crear cuenta</h1>
          <p className='text-xl mb-4'>
            Crea una cuenta para comenzar a administrar tu refugio.
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
                  <Input type='password' placeholder='Contraseña' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Crear</Button>
          <div>
            <p>
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => setHasAccount(true)}
              >
                ¡Ya tengo una cuenta!
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}

RegisterCard.propTypes = {
  setHasAccount: PropTypes.func.isRequired,
};
