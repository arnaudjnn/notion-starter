import { Box, Grid, Flex, HStack, FormControl, FormLabel, FormErrorMessage, Input, Textarea, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/core';
import Select from 'react-select';
import { Button } from 'components/common/Button';
import { useForm, Controller }from 'react-hook-form';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      alert(msg)
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }

  const { register, errors, handleSubmit, control } = useForm();

  const onSubmit = async data => {
    const res = await fetch('/api/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  };

  const ItemExplain = {
    color: 'red',
    transition: 'color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)'
  }

  return (
    <>
      {!status.submitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack spacing="24px">
            <FormControl isInvalid={errors.firstName}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                name="firstName"
                type="text"
                placeholder="John"
                ref={register({ required: true, maxLength: 80 })}
              />
              <FormErrorMessage>
                {errors.firstName && "Please enter your first name"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                name="lastName"
                type="text"
                placeholder="Doe"
                ref={register({ required: true, maxLength: 80 })}
              />
              <FormErrorMessage>
                {errors.lastName && "Please enter your last name"}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="john@acme.com"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.type === "required" && "Please enter your email"}
              {errors.email && errors.email.type === "pattern" && "Please enter a valid email"}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              name="phone"
              type="phone"
              placeholder="+1 (123) 456-7890"
              ref={register({
                required: true,
                validate: {
                  validNumber: value => value.length > 3 && value.length < 15,
                },
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.type === 'validNumber' && "Please enter a valid phone number"}
              {errors.phone && errors.phone.type === 'required' && "Please enter a phone number"}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.organization}>
            <FormLabel htmlFor="organization">Organization</FormLabel>
            <Input
              name="organization"
              type="text"
              placeholder="Acme"
              ref={register({ required: true })}
            />
            <FormErrorMessage>
              {errors.organization && "Please enter your organization name"}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              name="message"
              rows={4} 
              ref={register({ required: true  })}
            />
            <FormErrorMessage>
              {errors.needs && "Please enter your message"}
            </FormErrorMessage>
          </FormControl>
          <Box mt="5">
            <Button variant="primary" onClick={handleSubmit(onSubmit)} width="100%">
              {!status.submitting
                ? !status.submitted
                  ? 'Request a demo'
                  : 'Request sent'
                : 'Sending...'}
            </Button>
          </Box>
        </form>
      ) : (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to you soon.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};