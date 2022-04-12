import PropTypes from 'prop-types'
import React from 'react'
import continuosIntegrationImage from '../images/continuous_integration.jpeg'
import developerToolsImage from '../images/developerTools.jpg'
import WorkPage from '../pages/Work'
import AboutPage from '../pages/About'
import BlogPreview from './blog/BlogPreview'

class Main extends React.Component {
  async openBlogArticle() {
    await this.props.setIsArticleVisible(false)
    await this.props.onOpenArticle('integration')
  }

  render() {
    let close = (
      <div
        aria-label="Close Button"
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
        role="button"
        tabIndex={0}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <AboutPage />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <WorkPage />
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <BlogPreview
            blogTitle="My MUST HAVE developer tools"
            blogRoute="/blog/DeveloperTools"
            blogImageSrc={developerToolsImage}
          />
          <BlogPreview
            blogTitle="From Release-All-Nighters to Continuous Integration — A True Story"
            blogRoute="/blog/ContinuousIntegration"
            blogImageSrc={continuosIntegrationImage}
          />
          {close}
        </article>
        <article
          id="integration"
          className={`${this.props.article === 'integration' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setIsArticleVisible: PropTypes.func,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
