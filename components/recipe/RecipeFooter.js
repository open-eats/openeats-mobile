import React from 'react'
import PropTypes from 'prop-types'


const RecipeFooter = ({ slug, source, username, updateDate, showEditLink, deleteRecipe }) => {
  let hostname = '';
  if (source) {
    // Get Host name of a URL
    let a = document.createElement('a');
    a.href = source;
    hostname = a.hostname;
  }

  const handleDelete = () => {
    if (window.confirm(intl.formatMessage(messages.confirm_delete))) {
      deleteRecipe(slug)
    }
  };

  const sourceLink = (
    <div>
      { intl.formatMessage(messages.source) }:
      <a href={ source }>{ hostname }</a>
    </div>
  );

  const editLink = (
    <Link to={ "/recipe/edit/" + slug }>
      <button className="btn btn-primary btn-sm">
        <span className="glyphicon glyphicon-pencil"/>
      </button>
    </Link>
  );

  const deleteLink = (
    <button className="btn btn-danger btn-sm" onClick={ handleDelete }>
      <span className="glyphicon glyphicon-trash"/>
    </button>
  );
  
  return (
    <div className="panel-footer">
      <div className="row">
        <div className="col-xs-6">
          { (source) ? sourceLink : null }
          <div>{ intl.formatMessage(messages.created_by) }: { username }</div>
          <div>{ intl.formatMessage(messages.last_updated) }: { updateDate }</div>
        </div>
        <div className="col-xs-6 pull-right text-right">
          { showEditLink ? editLink : null }
          { showEditLink ? deleteLink : null }
        </div>
      </div>
    </div>
  );
};

RecipeFooter.PropTypes = {
  slug: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  updateDate: PropTypes.instanceOf(Date).isRequired,
  showEditLink: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(RecipeFooter);
