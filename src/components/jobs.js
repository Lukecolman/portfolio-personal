export default function Jobs ({}) {
    const JobItem = [
        {
            role: 'Frontend Developer',
            company: 'VIXEL Agency',
            period: 'Enero 2023 - Febrero 2024',
            type: 'Remote',
          },
          {
            role: 'Frontend Developer',
            company: 'VIXEL Agency',
            period: 'Enero 2023 - Febrero 2024',
            type: 'Remote',
          },
    ]
    return (
        <div>
        {JobItem.map((job, index) => (
            <div key={index} className="font-medium my-4 py-6 text-lk-red-400 border-b-2 border-lk-red-400 flex flex-col gap-1 text-left">
                <h1 className=" text-4xl text-lk-red-600">{job.role}</h1>
                <p className="">{job.company}</p>
                <p>{job.period}</p>
                <p>{job.type}</p>
            </div>
        ))}
    </div>

    );
}
