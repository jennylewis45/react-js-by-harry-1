// ResumeData.js

const resumeData = {
    name: 'Your Name',
    title: 'Web Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'ABC Company',
        year: '2020-2022',
      },
      {
        title: 'UI Designer',
        company: 'XYZ Design Studio',
        year: '2018-2020',
      },
    ],
  };
  {experience.length > 0 && (
    <div>
      <h3>Experience:</h3>
      <ul>
        {experience.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> at {job.company} ({job.year})
          </li>
        ))}
      </ul>
    </div>
  )}
  
  export default resumeData;
  