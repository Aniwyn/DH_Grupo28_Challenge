const ApplicantCard = ({ applicant })  => {
    return(
        <a className="flex flex-col bg-white shadow-lg rounded-lg lg:m-2 md:m-0 lg:w-[30%] md:w-[50%] w-[100%] hover:bg-gray-100" href="/#">
            <div className="text-center border-b py-5 flex-grow">
                <img src={`/img/${applicant.image}`} className="h-[100px] mb-4 rounded-full mx-auto" alt="" />
                <h4 className="font-bold text-gray-600">{applicant.name} {applicant.last_name}</h4>
                <div className="flex flex-col tems-center">
                    {applicant.professions.map((profession, i) => {
                        return <p className="text-gray-600" key={`${profession.id}-${i}`}>{profession.name}</p>
                    })}
                </div>       
            </div>
            <div className="flex justify-between py-5 px-10">
                <img src="/icons/star.png" className="h-6 opacity-75 cursor-pointer" alt="" />
                <img src="/icons/bubble-chat.png" className="h-6 opacity-75 cursor-pointer" alt="" />
                <img src="/icons/email.png" className="h-6 opacity-75 cursor-pointer" alt="" />
            </div>
        </a>
    )
}

export default ApplicantCard