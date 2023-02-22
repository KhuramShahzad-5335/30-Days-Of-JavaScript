// ==============>  INTRO TO HTML5 WEB STORAGE  <====================

/*
        Web Storage ( session storage and local storage) is a new HTML 5,
    API offering important benefits over the traditional cookies. Before
    html5, application data had to be stored in traditional cookies, and 
    should be included in every server request. Web Storage is more secure,
    and large amount of data can be stored (atleast 5mb of data per cookie.).
    and never transfered to the server. 

        All sites from the same origin can store and access the same data from
    anywhere.

        The data being stored can be accessed using the javascript, which gives us
    the ability to leverage client side scripting.

    There are two kinds of web storages:
        1.  Session Storage.
        2.  Local Storage.



    1. LOCAL STORAGE : -
        Local storage is similar to session storage except that while data 
    stored in local storage has no expiration time, while data stored in session
    storage gets cleared when page session ends -- that is when the page is closed.

        It should be noted that, data stored in eaither type of web storage is
    specific to the protocol of the page itself.

        The keys and values are always strings (note that, as with objects, integer
    keys will be automatically converteed to the strings.)
*/



// ===>                           USE CASES OF WEB STORAGES                       <===
/*

// =====>      FOR LOCAL STORAGE : -

            1. Store data temporarily.
            2. Saving the products in the web storage that the user places in the cart.
            3. Data can be made available between page requests, multiple browser tabs. and 
        also between browser sessions using local storage.
            4. Data can be used offline completely using local storage.
            5. Web storage can be great performance win when some static data is stored on the 
        client to minimize the number of subsequent requests . Even images can be stored in strings 
        using the base64 encoding.
            6. Web storage can also be used for the user authentication.


            *** From the usecases, mentioned above it makes more sense to use local storage.
        You may be wandering then when to use the session storage.


// ======>      FOR SESSION STORAGE : -
            In cases, wen we want to get rid of the data as soon as the window is closed. OR,
        perhaps we donot want he applcation to interfere with the same application thats open
        in another window. These scenerios are served best with session storage.

*/  
 


// ==== > Now lets try to implement these scenerios in real life.