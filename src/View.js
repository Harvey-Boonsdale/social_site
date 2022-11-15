import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./App.css";

function View(props) {
  const buildRows = () => {
    return props.update.map((current, index) => (
      <tr key={index} className={current.id}>
        <td>{current.userName}</td>
        <td>{current.userText}</td>
        <td>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleLike();
            }}
          >
            Like
          </Button>
        </td>
        <td>{current.likes}</td>
      </tr>
    ));
    //a function that runs when the post is clicked
    function Like() {
      console.log(current.likes);
      const [likes, changeLikes] = useState(0);

      const handleLike = (clickedLikes) => {
        changeLikes(likes + 1);
      };
    }
  };

  //  figure out which object in state needs to be changed

  //   change the likes on the post

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Status</th>
            <th></th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>{buildRows()}</tbody>
      </Table>
    </>
  );
}
export default View;
