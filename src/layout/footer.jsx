function Footer() {
   return (
      <footer className="page-footer black">
         <div className="footer-copyright">
            <div className="container">
               by zanozzzza © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="https://github.com/zanozzzza/react1">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
