import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Review';
import profileTemp from "./Images/derp.jpg";

export class Menu extends Component {

  render() {
    return (
        <div id="reviewsdiv" class="shadow p-3 mb-5 bg-F3F3F3 rounded">
        <p className="menuTitle">Reviews</p>
        <Review
          id={1}
          userID={1}
          userPicture={profileTemp}
          username={"George Bright"}
          score={5}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={2}
          userID={3}
          userPicture={profileTemp}
          username={"John Hunter"}
          score={1}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={3}
          userID={2}
          userPicture={profileTemp}
          username={"Max Neig"}
          score={2}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={4}
          userID={4}
          userPicture={profileTemp}
          username={"Mike Hunter"}
          score={10}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={5}
          userID={42}
          userPicture={profileTemp}
          username={"Default"}
          score={5}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={6}
          userID={41}
          userPicture={profileTemp}
          username={"Default"}
          score={7}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={7}
          userID={43}
          userPicture={profileTemp}
          username={"Default"}
          score={3}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
        <div className="line"></div>
        <Review
          id={8}
          userID={44}
          userPicture={profileTemp}
          username={"Default"}
          score={8}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."
          }
        />
      </div>
    );
  }
}

export default Menu;
