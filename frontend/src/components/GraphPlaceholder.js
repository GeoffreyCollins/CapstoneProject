import React from 'react';
import { Container, Paper } from '@material-ui/core';

const GraphPlaceholder = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', height: '400px' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Graph will be displayed here</h2>
        </div>
      </Paper>
    </Container>
  );
};

export default GraphPlaceholder;
