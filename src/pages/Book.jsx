

function Book() {
  return (
    <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8 offset-sm-0 offset-2'>
      <div className='book'>
        <div className='book-inner-wrapper d-flex align-items-stretch'>
          <div className='book-bind-mark'>
            <div className='book-bind-shadow'></div>
          </div>
          <div className='book-front-detail d-flex align-items-center'>
            <div className='book-detail-wrapper'>
              <h5 className='book-front-title'>Heartstopper</h5>
              <div className='book-front-author fw-bold mb-2'>by Alice Oseman</div>
              <div className='book-front-isbn fw-lighter'>14449576517</div>
              <div className='book-front-pub-date fw-lighter'>7 December 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
