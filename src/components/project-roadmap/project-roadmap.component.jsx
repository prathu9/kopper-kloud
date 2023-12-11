import './project-roadmap.style.css';

const ProjectRoadmapBox = ({indexNumber,title, list}) => {
    return(
        <div className="project-roadmap-box-wrapper">
            <div className="index-number">
                {indexNumber}
            </div>
            <div className="project-roadmap-box">
                <h2>{title}</h2>
                <ul>
                    {
                        list.map((elem, index) => (
                            <li key={elem+index}>{elem}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}



const ProjectRoadmap = ({roadmapData}) => {
    return(
        <div className="project-roadmap-wrapper">
            <svg width="10" className="list-svg-line">
                <rect width="8" height="100%" fill="#E8A473"/>
            </svg>
            <div className="project-roadmap-list">
                {
                 roadmapData.map((data, i) => (
                    <ProjectRoadmapBox
                        key={data.title + i}
                        indexNumber={data.indexNumber}
                        title = {data.title}
                        list={data.list}
                    />
                 ))
                }
            </div>
        </div>
    )
}

export default ProjectRoadmap;