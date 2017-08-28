import React from 'react';
import moment from 'moment';

const Certificate = props => {
    const getCertificate = props.certificatesData.map(function(item, index) {
  		return (
          <div key={index}>
            <h4>{item.certificateName}</h4>
  				  <h5>{item.institution}</h5>
  				</div>
        )
  	});

  	return (
  	  <section className="certificate">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-certificate"></i> Certificates</h2>
        {getCertificate}
      </section>
  	)
};

export default Certificate;
