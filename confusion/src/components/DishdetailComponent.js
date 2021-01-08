import React,{Component } from 'react';

import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail  extends Component { 

    renderDish(dish){
        if(dish !=null){
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name}/>
               <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
            </div>
            );
        }
        else{
            return(
                <div></div>
              );
        }
    }     

    renderComments(comments){
       if(comments==null){
            return(
               <div></div>
            );
        }
       const com=comments.map(comment => {
          return(
              <li key={comment.id}>
                <br/>
               {comment.comment}
                <br/> <br/>
                --{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br/>
              </li>
          );
       });
        return(
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {com}
                </ul>
              </div>
        )
        }
      render(){
           const dish=this.props.dish
           if(dish==null){
               return(
                   <div></div>
               );
           }
           const dish_render=this.renderDish(dish)
           const comment_render=this.renderComments(dish.comments)
           
           return(
               <div className="row">
                     {dish_render}
                     {comment_render}
               </div>
           );
           }
      }  


  export default DishDetail; 