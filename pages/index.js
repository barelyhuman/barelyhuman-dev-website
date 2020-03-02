import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="margin-md flex flex-col v-center">
          <a href="/" className="action-link">
          <img src="static/code.svg" className="center-align" height="128" alt=""/>
            <span className="dark-gray font-size-50 text-center flex just-center">
              BarelyHuman
            </span>
          </a>
          <div className="tagline margin-md width-50">
            <p className="font-size-17">
            A Philanthropic Venture Run by and for People Who Love to Code. Explore This Space for Third Party Apps & Developer Tools!
            </p>
          </div>
        </div>
        <div className="social-links flex just-center">
          <a href="https://github.com/barelyhuman">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              height="30"
              width="30"
            />
          </a>
        </div>

      <style jsx global>
    {
      `
      .center-align{
        display:block;
        margin:0 auto;
      }
      `
    }
      </style>

      </div>
    </Layout>
  );
}

export default Index;