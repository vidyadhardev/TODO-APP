const Footer = () => {
  return (
    <>
      {/* <!-- SVG Icon Start --> */}
      <svg style={{ display: "none" }}>
        <symbol id="twitter" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.37 1.89-2.38-.83.49-1.75.84-2.73 1.03a4.13 4.13 0 0 0-7.04 3.77A11.72 11.72 0 0 1 1.67 4.88a4.11 4.11 0 0 0 1.28 5.47c-.7-.02-1.36-.21-1.94-.52v.05c0 2.04 1.45 3.74 3.37 4.13a4.13 4.13 0 0 1-1.86.07c.52 1.63 2.03 2.82 3.82 2.85A8.28 8.28 0 0 1 1 18.04a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.68 0-.18 0-.35-.01-.53.8-.58 1.5-1.3 2.05-2.13z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 24 24">
          <path d="M12 2.16c3.2 0 3.584.012 4.847.07 1.259.058 2.074.276 2.564.465.62.234 1.064.513 1.528.978.464.464.744.908.978 1.528.19.49.407 1.305.465 2.564.059 1.263.07 1.646.07 4.846s-.012 3.584-.07 4.847c-.058 1.259-.276 2.074-.465 2.564-.234.62-.513 1.064-.978 1.528-.464.464-.908.744-1.528.978-.49.19-1.305.407-2.564.465-1.263.059-1.646.07-4.847.07s-3.584-.012-4.847-.07c-1.259-.058-2.074-.276-2.564-.465-.62-.234-1.064-.513-1.528-.978-.464-.464-.744-.908-.978-1.528-.19-.49-.407-1.305-.465-2.564C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.847c.058-1.259.276-2.074.465-2.564.234-.62.513-1.064.978-1.528.464-.464.908-.744 1.528-.978.49-.19 1.305-.407 2.564-.465 1.263-.059 1.646-.07 4.847-.07zm0-2.16c-3.257 0-3.667.013-4.947.072-1.276.059-2.47.276-3.405.61a6.486 6.486 0 0 0-2.354 1.53 6.486 6.486 0 0 0-1.53 2.354c-.334.935-.551 2.129-.61 3.405C2.172 8.333 2.16 8.743 2.16 12s.013 3.667.072 4.947c.059 1.276.276 2.47.61 3.405a6.486 6.486 0 0 0 1.53 2.354 6.486 6.486 0 0 0 2.354 1.53c.935.334 2.129.551 3.405.61 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.276-.059 2.47-.276 3.405-.61a6.486 6.486 0 0 0 2.354-1.53 6.486 6.486 0 0 0 1.53-2.354c.334-.935.551-2.129.61-3.405.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.059-1.276-.276-2.47-.61-3.405a6.486 6.486 0 0 0-1.53-2.354 6.486 6.486 0 0 0-2.354-1.53c-.935-.334-2.129-.551-3.405-.61-1.28-.059-1.69-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.846-11.367a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </symbol>
      </svg>
      {/* <!-- SVG Icon End --> */}

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-light bg-info">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use
              xlinkHref="#bootstrap"></use></svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use
            xlinkHref="#twitter"></use></svg></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use
            xlinkHref="#instagram"></use></svg></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use
            xlinkHref="#facebook"></use></svg></a></li>
        </ul>
      </footer>
    </>
  )
}
export default Footer;