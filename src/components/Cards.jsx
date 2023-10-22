import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Job title</MDBCardTitle>
            <MDBCardText>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, error. Rem, provident enim! Atque temporibus consequuntur deleniti repudiandae laudantium, dignissimos repellat dolor sed recusandae in totam. Facilis doloribus et aut eos suscipit dolores amet laborum nisi officia soluta in quibusdam nam veritatis exercitationem repellat eveniet tenetur maxime, nulla voluptate! Vel placeat, pariatur cupiditate modi optio dolorem, fuga praesentium itaque fugiat maxime alias quia aliquam porro!
            </MDBCardText>
            <MDBBtn href='#'>Apply</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Job title </MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio totam consequuntur modi aut explicabo molestias eaque illo laborum ipsa, commodi doloremque ea odio sed sint eos at, atque et accusantium quae corrupti recusandae. Commodi laborum aut odio numquam animi minus sed libero recusandae nihil magnam dolor illo repellat illum perferendis ab, nisi eaque sequi iste debitis qui hic explicabo quo. Autem eveniet in expedita.
            </MDBCardText>
            <MDBBtn href='#'>Apply</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
    
  );
}