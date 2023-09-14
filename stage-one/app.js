const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const current_day = new Date().toLocaleString('en-US', { weekday: 'long' });
  const utcMilliseconds = new Date().toISOString();
  const utc_time = utcMilliseconds.slice(0, -5) + 'Z';  
  const track = req.query.track;
  const github_file_url = 'https://github.com/Fahyvor/hng-stage-one/blob/main/app.js';
  const github_repo_url= 'https://github.com/Fahyvor/hng-stage-one';

  const currentUTCHours = new Date().getUTCHours();
   {
    res.status(200).json({
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      statusCode: 200,
    });
  } 
});

const port = 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
