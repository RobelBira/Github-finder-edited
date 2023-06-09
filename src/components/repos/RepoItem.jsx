import PropTypes from 'prop-types'
import { FaEye,FaInfo,FaLink,FaStar,FaUtensils } from 'react-icons/fa'


function RepoItem({repo}) {
    const{name,description,html_url,forks,open_issues,watchers_count,stargazers_count}= repo
  return (
    <div className='mb-2 rounded-md card bg-gray-300 hover:bg-gray-100 hover:scale-105 duration-700'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url}>
                    <FaLink className='inline mr-1'/>
                    {name}
                </a>
            </h3>
<p className="mb-3">{description}</p>
<div className='flex gap-14'>
   <div className="mr-2 badge badge-info badge-lg">
    <FaEye className='mr-2 text-cyan-600 inline'/>
    {watchers_count}
    </div> 

    <div className="mr-2 badge badge-success badge-lg">
    <FaStar className='mr-2 text-green-400 inline'/>
    {stargazers_count}
    </div> 
    <div className="mr-2 badge badge-error  badge-lg">
    <FaInfo className='mr-2 text-red-600 inline'/>
    {open_issues}
    </div> 
    <div className="mr-2 badge badge-warning badge-lg">
    <FaUtensils className='mr-2 text-yellow-600 inline'/>
    {forks}
    </div> 
   

</div>
        </div>
        
        
       
        </div>
  )
}

RepoItem.propTypes={
    repos:PropTypes.object.isRequired
}
export default RepoItem