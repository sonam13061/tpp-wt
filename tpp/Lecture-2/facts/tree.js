let root={
    data:10,
    children:
      [
        {
          data:20,
          children:[
              {
                  data:50,
                  children:[]
              },
              
                {
                    data:60,
                    children:[]
                }
               
                    

          ]},{
          data:30,
          children:[
              {
              data:70,
              children:[
                  {
                data:110,
                children:[]
                }
            
            ,
                {
                  data:120,
                  children:[]
                  }
              ]
              },
              {
                data:80,
                children:[]
                },




          ]},{
          data:40,
          children:[
            {
            data:90,
            children:[]
            }
        ]
        }

        ]



    }

function displayTree(root){
    let str=""+root.data+"=>";
      for(let i=0;i<root.children.length;i++){
          str+=root.children[i].data+",";
      }
      console.log(str);
      for(let i=0;i<root.children.length;i++){
       displayTree(root.children[i]);
    }

}
console.log(displayTree(root));
