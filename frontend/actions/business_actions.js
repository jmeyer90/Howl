import * as BusinessUtils from '../util/business_utl';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const BUSINESS_ERRORS = "BUSINESS_ERRORS";

const receiveBusinesses = businesses =>({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = business =>({
  type: RECEIVE_BUSINESS,
  business
});

const businessErrors = (errors) => {
  return {
    type: BUSINESS_ERRORS,
    errors
  }
}

export const fetchBusinesses = () => dispatch =>(
  BusinessUtils.fetchBusinesses()
  .then( 
    businesses => dispatch( receiveBusinesses( businesses )),
    errors => dispatch( businessErrors( errors.responseJSON ))
  )
);

export const fetchBusiness = businessId => dispatch =>(
  BusinessUtils.fetchBusiness( businessId )
  .then( 
    business => dispatch( receiveBusiness( business )),
    errors => dispatch( businessErrors( errors.responseJSON ))
  )
)