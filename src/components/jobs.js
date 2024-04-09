export default function Jobs ({}) {
    const JobItem = [
        {
            role: 'Frontend Developer',
            company: 'VIXEL',
            period: '2023 - Present',
            type: 'Remote',
          },
          {
            role: 'UI Developer / Designer',
            company: 'Ciudad Autonoma de Buenos Aires',
            period: '2022 - 2024',
            type: 'Remote',
          },
          {
            role: 'Video Editor',
            company: 'Circulo Creativo',
            period: '2022 - 2023',
            type: 'Remote',
          },
          {
            role: 'Graphic Designer / Photographer',
            company: 'Freelance',
            period: '2018 - Present',
            type: 'Remote',
          },          
          {
            role: 'Graphic Designer / Photographer',
            company: 'Lopez Hnos.',
            period: '2017 - 2019',
            type: 'On site',
          },
    ]
    return (
        <div>
        {JobItem.map((job, index) => (
            <div key={index} className="font-medium my-4 py-6 text-lk-red-400 border-b-2 border-lk-red-400 flex flex-col gap-1 text-left 
            md:flex-row md:justify-between md:font-semibold group/item ">
                <div className="group-hover/item:translate-x-6 transition">
                <h1 className=" text-4xl text-lk-red-600">{job.role}</h1>
                <p className="">{job.company}</p>
                </div>
                <div className="md:self-end md:text-right group-hover/item:-translate-x-6 transition"> 
                <p>{job.period}</p>
                <p>{job.type}</p>
                </div>
            </div>
        ))}
    </div>

    );
}
