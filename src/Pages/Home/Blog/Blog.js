import React from "react";
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <h2 className="text-info">Blogs(3)</h2>
      <div className="blog-container">
        <h3 className="text-success">Q:Deifference Between JS Vs Node JS</h3>
        <p>
          JavaScript is a scripting language.Javascript is a high level
          programming language based on Object Oriented Programming.Javascript
          allows dynamic rendering and make changes in HTML DOM.It has some
          frameworks like ANgular,VUE and Librariy Like React JS Node JS is a
          javascript runtime environment. Node JS used to create connection
          between Client and Server Side.Node Js is mostly used in server side
          development.Node js can not make changes in HTML Dom.
        </p>
        <h3 className="text-success">Q:When to use Node JS and MongoDB</h3>
        <p>
          Node js used to create connection between server and client. MongoDB
          is a Database used to store data.Node Js is also used to make
          connection between Database and Client Side application.MongoDB is a
          Nosql database.MongoDB provides flexibility in storing
          data.Flexibility in filtering data query.Easy usuablity with JSON
          Data.
        </p>
        <h3 className="text-success">
          Q:Difference Between SQL and NoSql Database.
        </h3>
        <p>
          SQL is a relational Database System. SQL works effectively in
          insert,search,update,delete operations. Popular SQL databases are
          MySql Database,Oracle etc. NoSql is non relational database system.It
          provides flexible query operations that free of joining tables. NoSql
          database is used in large applications also efficient in realtime
          websites.MongoDB is a popular NoSql database.
        </p>
      </div>
    </div>
  );
};

export default Blog;
