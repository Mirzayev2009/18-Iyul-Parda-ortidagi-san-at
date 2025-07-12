const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

// ✅ Your Supabase credentials (backend only – keep this private!)
const supabase = createClient(
  'https://scinkyuoosbtpdowdzhd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaW5reXVvb3NidHBkb3dkemhkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjI1NDg1NCwiZXhwIjoyMDY3ODMwODU0fQ.uQVULJKvelqVgX5u-rTenZ1SsHydHsDGSm0ZEKlZTzk' // ⚠️ Replace this with your **Service Role Key** from Supabase settings
);

// ✅ POST route to handle name + phone submission
app.post('/submit', async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  // Step 1: Check if the phone number already exists
  const { data, error: checkError } = await supabase
    .from('submissions_parda')
    .select('id')
    .eq('phone', phone);

  if (checkError) {
    return res.status(500).json({ error: 'Database error during check' });
  }

  if (data.length > 0) {
    return res.status(400).json({ error: 'This number has already been used' });
  }

  // Step 2: Insert the new submission
  const { error: insertError } = await supabase
    .from('submissions_parda')
    .insert([{ name, phone }]);

  if (insertError) {
    return res.status(500).json({ error: 'Failed to save the submission' });
  }

  res.status(200).json({ message: 'Submitted successfully' });
});

// ✅ Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
