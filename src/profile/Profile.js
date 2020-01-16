2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.
import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
class Profile extends React.Component{
constructor(props){
super(props)
this.state = {}
}
render(){
let bannerStyle = {
backgroundImage: (this.props.profile.banner!=null ?
'url('+this.props.profile.banner +')' : 'none')
}
return(
<aside id="profile" className="twitter-panel">
Página | 19220.
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.
31.
32.
33.
34.
35.
36.
37.
38.
39.
40.
41.
42.
43.
44.
45.
46.
47.
48.
49.
50.
51.
52.
53.
54.
55.
56.
57.
58.
59.
60.
61.
62.
63.
64.
65.
66.
67.
68.
69.
70.
71.
<div className="profile-banner">
<Link to={"/" + this.props.profile.userName}
className="profile-name" style={bannerStyle}/>
</div>
<div className="profile-body">
<img className="profile-avatar" src={this.props.profile.avatar}/>
<Link to={"/" + this.props.profile.userName}
className="profile-name">
{this.props.profile.name}
</Link>
<Link to={"/" + this.props.profile.userName}
className="profile-username">
@{this.props.profile.userName}
</Link>
</div>
<div className="profile-resumen">
<div className="container-fluid">
<div className="row">
<div className="col-xs-3">
<Link to={"/"+this.props.profile.userName}>
<p className="profile-resumen-title">TWEETS</p>
<p className="profile-resumen-value">
{this.props.profile.tweetCount}</p>
</Link>
</div>
<div className="col-xs-4">
<Link to={"/"+this.props.profile.userName + "/following"}>
<p className="profile-resumen-title">SIGUIENDO</p>
<p className="profile-resumen-value">
{this.props.profile.following}</p>
</Link>
</div>
<div className="col-xs-5">
<Link to={"/"+this.props.profile.userName + "/followers"}>
<p className="profile-resumen-title">SEGUIDORES</p>
<p className="profile-resumen-value">
{this.props.profile.followers}</p>
</Link>
</div>
</div>
</div>
</div>
</aside>
)
}
}
Profile.propTypes = {
profile: PropTypes.object.isRequired
}
export default Profile