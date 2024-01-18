import './TurningCard.scss'

export default function TurningCard({
    turned = false,
    className = "",
    classNameFront = "",
    classNameBack = "",
    insideElementsFrontFace = [],
    insideElementsBackFace = []
}) {
  
  const combinedClasses = `posAbsolute w400px h450px centered bg-burgundy-60 borderR10px shadow10HV-30B-burgundy cardContainer ${className}`;
  const combinedClassesCard = `w100per h100per turningCard ${turned ? 'turned' : ''}`
  const combinedClassesFront = `posAbsolute w100per h100per bg-midnight borderR10px backfaceHidden ${classNameFront}`;
  const combinedClassesBack = `posAbsolute w100per h100per bg-midnight borderR10px backfaceHidden back ${classNameBack}`;

  return <>
      <div className={combinedClasses}>
        <div className={combinedClassesCard}>
          <div className={combinedClassesFront}>
            {insideElementsFrontFace}
          </div>
          <div className={combinedClassesBack}>
            {insideElementsBackFace}
          </div>
        </div>
      </div>
    </>
}