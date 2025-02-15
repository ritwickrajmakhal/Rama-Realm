module.exports = ({env}) => ({
    upload: {
      config: {
        providerOptions: {
          sizeLimit: 50 * 1024 * 1024, // Set the limit to 50MB (you can adjust this value)
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'hello@example.com',
          defaultReplyTo: 'hello@example.com',
        },
      },
    },
});
  
