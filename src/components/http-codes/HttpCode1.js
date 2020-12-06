import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function HttpCode(props) {
  const content = {
    'code': '404',
    'header': 'Page not found',
    'description': 'The requested page couldn\'t be located. Checkout for any URL misspelling.',
    'primary-action': 'Return to the homepage',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="md">
        <Box pt={8} pb={10} textAlign="center">
          <Typography variant="h1">{content['code']}</Typography>
          <Typography variant="h4" component="h2" gutterBottom={true}>{content['header']}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary">{content['primary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}