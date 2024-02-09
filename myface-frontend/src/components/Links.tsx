import {Page} from '../models/api/page'
import {PostModel} from '../models/api/postModel'
import {UserModel} from '../models/api/userModel'
import {Link} from 'react-router-dom'

export const Links: React.FC<Page<PostModel|UserModel|undefined>> = (props) =>{
    return(
        <div>
            {props.next &&
            <Link to={props.next}>Next</Link>
            }
            {props.previous &&
            <Link to={props.previous}>Previous</Link>
        }
        </div>
    )
}
