import React from 'react';

const SearchPageData = ({ data }) => {
  return (
    <div className="container search-page-data px-5">
      <div className="row px-1">
        <div className="col-md-12 py-3">
          <p className="small font-weight-light">
            About {data.searchInformation.formattedTotalResults} results (
            {data.searchInformation.formattedSearchTime}
            seconds){' '}
          </p>
          {data.items.map((item) => (
            <div key={item.displayLink}>
              <a
                href={item.displayLink}
                className="font-weight-normal header-post text-dark text-decoration-none">
                {item.displayLink}

                <i className="fa fa-angle-down ml-1"></i>
              </a>

              <h5 className="link-heading">
                <a
                  href={item.formattedUrl}
                  className="link-text"
                  dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
                />
              </h5>
              <p
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
                style={{ color: '#666' }}
              />
            </div>
          ))}
          {/* this is search page data {console.log(data)} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPageData;
