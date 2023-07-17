
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import "./UserProfile.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { API } from "../api";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Auth/Authorization";
axios.defaults.withCredentials = true;

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);

    const { id } = useParams();

    useEffect(() => {
        fetch(`${API}/user/userdata/${id}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching userdetails:', error));

    }, [id, setUser])

    return (
        <div>
            <div className="home-container-1">
                <LeftSidebar />
                <div className="home-container-2">

                    {user ? (
                        <section >
                            <div className="user-details-container">
                                <div className="user-details">
                                    <Avatar
                                        backgroundColor="purple"
                                        color="white"
                                        fontSize="50px"
                                        px="40px"
                                        py="30px"
                                    >
                                        {user.user.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <div className="user-name">
                                        <h1>{user.user.name}</h1>
                                        <p>
                                            <FontAwesomeIcon icon={faBirthdayCake} /> Joined on {moment(user.user.joinedON).fromNow()}
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h4>Tags </h4>
                                        <div className="user-tags-container">
                                            {user.user.tags.map((tag) => (
                                                <Link key={tag} className="user-tags-link" to={'/Tags'}>
                                                    <p>{tag}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Posts</h3>
                                        {/* {user.questionlist.map((questions) =>
                                            <div key={questions}>
                                                <h4> {questions.questionTitle}</h4>
                                                <p>{questions.questionBody}</p>
                                                <p>{questions.questionTags}</p>
                                            </div>
                                        )
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : <h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}

export default UserProfile