'use client';

import { register } from '@/actions/register';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import CardWrapper from './card-wrapper';

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="email@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
