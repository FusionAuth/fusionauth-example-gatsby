import React from "react"
import Layout from "../components/layout"
import { generateLoginUrl, generateLogoutUrl, getCurrentUser } from '../helpers/auth';

class ProfilePage extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    getCurrentUser((error, user) => {
      if (!error && user) {
        console.log(user)
        this.setState({ user })
      } else {
        window.location.href = generateLoginUrl()
      }
    })
  }

  render() {
    return (
      <Layout>
        <h1>Profile</h1>
        {this.state.user ? (
          <p>You are currently logged in as {this.state.user.email}</p>
        ) : (
          ""
        )}
        <p>
          <a href={generateLogoutUrl()}>Logout</a>
        </p>
      </Layout>
    )
  }
}

export default ProfilePage
