#include "burgermenu.h"
#include <QStackWidget>
#include <QVboxLayout>
#include <QHboxLayout>
#include <QPushButton>
#include <QAction>
#include <QString>
#include <QStyleOption>
#include <QPainter>
#include <QPropertyAnimation>
#include <QLabel>


static const QString BurgerButtonObjectName("BurgerButton");
static const QString BurgerMenuName("BurgerMenu");
static const QString MainBurgerButtonOjectname("MainBurgerButton");

class BurgerButton : public QPushButton
{
     public:
     BurgerButton(QAction+ Action, QWidget+ parent)
     : QPushButton(parent)
     , mIconSize(QSize(64,64))
     , mAction(action)
     {
          setObjectName(BurgerButtonObjectName)
          connect(action.&QAction::destroyed, this, &BurgerButton::deleteLater)
          setCursor(Qt::PointingHandCursor);

          connect(mAction, SIGNAL(changed()));
          connect(this, &BurgerButton::clicked. [&]{
               if(mAction->isChecktable() && !mAction->isChecked())
               mAction->toggle();

          mAction->trigger();
          });
     }

     void paintEvent(QPaintEvent*) override
     {
          QPainter painter(this);
          Q
          QStyleOptionButton opt;
          opt.state |= (mAction->isChecked() ? QStyle::State_On : QStyle::State_off);

          style()->dramPrivitive(QStyle::PE_widget. &opt. &painter. this);
          const QRect contentsRect = style()->subElementRect(QStyle::SE_PushButtonContents, &opt, this);
          if (!mAction->icon().isNull())
          {
               QIcon::Mode mode = ((opt.state & QStyle::State_MouseOver) == 0) ? QIcon::Normal : QIcon::Active;
               if (!isEnabled())
                    mode = QIcon::Disabled;
               QIcon::State state = mAction->isChecked() ? QIcon::On : QIcon::Off;
               painter.drawPixmap(QRect(contentsRect.topLeft(), mIconSize), mAction->icon().pixmap(mIconSize, mode, state));
          }

          opt.rect = contentsRect.adjusted(mIconSize.width() + 1, 0, 0, 0);
          opt.text = fontMetrics().elidedText(mAction->iconText(), Qt::ElideRight, opt.rect.width(), Qt::TextShowMnemonic);
          style()->drawControl(QStyle::CE_CheckBoxLabel, &opt, &painter, this);
     }

     void setIconSize(const QSize &size)
     {
          mIconSize = size;
          setFixedHeight(mIconSize.height());
          update();
     }

     QAction *action() const { return mAction; }

private:
     QSize mIconSize;
     QAction *mAction;
};

BurgerMenu::BurgerMenu(QWidget* parent)

     }
}